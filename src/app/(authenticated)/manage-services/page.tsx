'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { MrbDescription, MrbButton, MrbCol, MrbEmptyState, MrbList, MrbLoader, MrbRow, MrbTypography, MrbDescriptionList, MrbModal, MrbForm } from '@/designSystem'
import { Business, BusinessApi } from '@/domain/business'
import { Service, ServiceApi } from '@/domain/service'
import {MrbToast} from '@/designSystem'
import { useAuthentication } from '@/modules/authentication'
import { DateLibrary } from '@/libraries/date'
import { AiApi } from '@/domain/ai'
import { PageLayout } from '@/layouts/Page.layout'

export default function ManageServicesPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const toast = MrbToast.useToast()

  const [isLoading, setLoading] = useState<boolean>(true)
  const [items, setItems] = useState<Service[]>([])
  const [isAddModalOpen, setAddModalOpen] = useState<boolean>(false)
  const [isEditModalOpen, setEditModalOpen] = useState<boolean>(false)
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false)
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const businessId = authentication.user?.id
        if (businessId) {
          const services = await ServiceApi.findManyByBusinessId(businessId)
          setItems(services)
        }
      } catch (error) {
        toast.error('Failed to fetch services')
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [authentication.user?.id])

  const handleAddService = async (values: any) => {
    try {
      const businessId = authentication.user?.id
      if (businessId) {
        await ServiceApi.createOneByBusinessId(businessId, values)
        toast.success('Service added successfully')
        setAddModalOpen(false)
      }
    } catch (error) {
      toast.error('Failed to add service')
    }
  }

  const handleEditService = async (values: any) => {
    try {
      if (selectedService) {
        await ServiceApi.updateOne(selectedService.id, values)
        toast.success('Service updated successfully')
        setEditModalOpen(false)
      }
    } catch (error) {
      toast.error('Failed to update service')
    }
  }

  const handleDeleteService = async () => {
    try {
      if (selectedService) {
        await ServiceApi.deleteOne(selectedService.id)
        toast.success('Service deleted successfully')
        setDeleteModalOpen(false)
      }
    } catch (error) {
      toast.error('Failed to delete service')
    }
  }

  return (
    <PageLayout layout="narrow">
      {isLoading && <MrbLoader size="large" isExpanded />}

      {!isLoading && (
        <>
          {items?.length === 0 && (
            <MrbEmptyState>
              There are no services to display.
              <MrbButton variant="primary" size="small" onClick={() => setAddModalOpen(true)}>
                Add New Service
              </MrbButton>
            </MrbEmptyState>
          )}

          <MrbList divider={true}>
            {items?.map((service) => (
              <MrbList.Item key={service.id}>
                <MrbRow gap={2} className="mrb-fill-x">
                  <MrbCol xs="fill">
                    <MrbTypography variant="h3">{service.name}</MrbTypography>
                    <MrbDescriptionList orientation="horizontal">
                      <MrbDescription>
                        <MrbDescription.Label>Description</MrbDescription.Label>
                        <MrbDescription.Value>{service.description}</MrbDescription.Value>
                      </MrbDescription>
                    </MrbDescriptionList>
                    <MrbRow horizontal="right" gap={1}>
                      <MrbButton
                        variant="primary"
                        onClick={() => {
                          setSelectedService(service)
                          setEditModalOpen(true)
                        }}
                      >
                        Edit
                      </MrbButton>
                      <MrbButton
                        variant="danger"
                        onClick={() => {
                          setSelectedService(service)
                          setDeleteModalOpen(true)
                        }}
                      >
                        Delete
                      </MrbButton>
                    </MrbRow>
                  </MrbCol>
                </MrbRow>
              </MrbList.Item>
            ))}
          </MrbList>

          <MrbButton variant="primary" size="medium" onClick={() => setAddModalOpen(true)}>
            Add New Service
          </MrbButton>
        </>
      )}

      <MrbModal isOpen={isAddModalOpen} onClose={() => setAddModalOpen(false)} header="Add New Service">
        <MrbForm
          onSubmit={handleAddService}
          inputs={[
            { key: 'name', type: 'text', label: 'Service Name' },
            { key: 'description', type: 'textarea', label: 'Service Description' },
          ]}
        >
          <MrbButton type="submit">Save</MrbButton>
        </MrbForm>
      </MrbModal>

      <MrbModal isOpen={isEditModalOpen} onClose={() => setEditModalOpen(false)} header="Edit Service">
        <MrbForm
          onSubmit={handleEditService}
          defaultValues={selectedService || {}}
          inputs={[
            { key: 'name', type: 'text', label: 'Service Name' },
            { key: 'description', type: 'textarea', label: 'Service Description' },
          ]}
        >
          <MrbButton type="submit">Update</MrbButton>
        </MrbForm>
      </MrbModal>

      <MrbModal isOpen={isDeleteModalOpen} onClose={() => setDeleteModalOpen(false)} header="Confirm Deletion">
        <MrbTypography>Are you sure you want to delete this service?</MrbTypography>
        <MrbButton variant="danger" onClick={handleDeleteService}>Delete</MrbButton>
      </MrbModal>
    </PageLayout>
  )
}