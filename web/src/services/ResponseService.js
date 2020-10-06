const ResponseService = (obj, type, description) => {
    let response = JSON.parse(JSON.stringify(obj)).response
    return !navigator.onLine
      ? new Error('Sem acesso à internet, por favor, tente mais tarde')
      : !response
        ? new Error('Servidor indisponivel, tente mais tarde')
        : new Error(verifyStatusResponse(response, type, description))
  }
  const verifyStatusResponse = (response, type, description) => {
    let data = response.data
    let statusHttp = {
      400: () => verifyErrorsData(data),
      403: () => 'Problemas com o token de autenticação. Logue-se novamente.',
      401: () => 'Você não tem permissão para executar essa ação.',
      404: () => 'Endereço de acesso não encontrado',
      500: () => verifyTypeAction(type, description),
      503: () => `Servidor indisponível. Tente novamente mais tarde`,
      default: () => 'Erro de verificação do status da requisição'
    }
    return (statusHttp[response.status] || statusHttp['default'])()
  }
  const verifyErrorsData = data => {
    return data && data !== {}
      ? data.length > 1
        ? data
        : data[0].errorMessage
      : 'Existem erros a serem processados'
  }
  const verifyTypeAction = action => {
    let typesAction = {
      list: 'Não foi possível realizar a listagem, tente mais tarde.',
      show: 'Não foi possível realizar a listagem, tente mais tarde.',
      create: 'Não foi possível realizar o cadastro, tente mais tarde.',
      update: 'Não foi possível realizar a edição, tente mais tarde.',
      remove: 'Não foi possível realizar a exclusão, tente mais tarde.',
      default: 'Erro de verificação'
    }
    return typesAction[action] || typesAction['default']
  }
  export { ResponseService }