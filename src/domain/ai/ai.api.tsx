import { HttpService } from '../../core/http'

/**
 * @provider AiApi
 * @description An AI library to query ChatGPT
 * @function {(prompt: string) => Promise<string>} query - Send the prompt to ChatGPT and get back its answer
 * @usage `AiApi.query(prompt)`
 * @import import { AiApi } from '@/domain/ai'
 */
export namespace AiApi {
  export function query(question: string): Promise<string> {
    return HttpService.api.post(`/v1/ai/query`, { question })
  }
}
