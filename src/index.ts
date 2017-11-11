import { execSync } from 'child_process'
import * as jdistsUtil from 'jdists-util'

/**
 * 获取命令执行结果
 *
 * @param content 文本内容
 * @return 返回命令执行过程
 * @example processor():base
  ```js
  const path = require('path')
  console.log(path.basename(processor('pwd').trim()))
  // > exec
  console.log(path.basename(processor('echo "汉字"').trim()))
  // > 汉字
  ```
 * @example processor():content is null
  ```js
  console.log(processor(null))
  // > null
  ```
 * @example processor():error
  ```js
  console.log(path.basename(processor('pwd')))
  // * throw
  ```
 */
export = (function (content: string): string | Promise<string> {
  if (!content) {
    return content
  }

  return String(execSync(content, {
    encoding: 'utf-8',
  }))
}) as jdistsUtil.IProcessor