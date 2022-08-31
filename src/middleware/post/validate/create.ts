



export const isValid = (body: string) => {
  const error: any = {}
  
  if(body.trim() === '')
    {
      error['body'] = 'Error required'
    }

  return error

}
