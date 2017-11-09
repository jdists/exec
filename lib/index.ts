import { exec } from 'child_process'
import * as jdistsUtil from 'jdists-util'
/**
 * 获取命令执行结果
 *
 * @param content 文本内容
 * @return 返回命令执行过程
 * @example processor():base
  ```js
  const path = require('path')
  processor('pwd').then(function (reply) {
    console.log(path.basename(reply.trim()))
    // > exec
    // * done
  }).catch(function (err) {
    console.error(err)
  })
  ```
 * @example processor():content is null
  ```js
  console.log(processor(null))
  // > null
  ```
 * @example processor():error
  ```js
  processor('@none').then(function () {
  }).catch(function (err) {
    console.log(!!err)
    // > true
    // * done
  })
  ```
 */
export = (function (content: string): string | Promise<string> {
  if (!content) {
    return content
  }
  return new Promise<string>((resovle, reject) => {
    exec(content, (error: Error, stdout: string, stderr: string) => {
      if (error) {
        reject(error)
        return
      }
      resovle(stdout)
    })
  })
}) as jdistsUtil.IProcessor