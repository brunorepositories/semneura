import RestConnection from '@/configs/restConnection'

// Funções Globais para as mascaras
export function updateMoneyData (val) {
	val = val.replace('R$ ', '')
	val = val.replace(/\./g, '')
	val = val.replace(',', '.')

	return val
}

export function cleanJsonData (data) {
	const cleanData = data.data[0].dados

	return cleanData
}

export function updateCPFData (cpf) {
	cpf = cpf.replace(/\./g, '')
	cpf = cpf.replace('-', '')

	return cpf
}

export function updateDateData (data) {
	data = data.split('/')
	data = data[2] + '-' + data[1] + '-' + data[0]

	return data
}

export function convertDateData (data) {
	data = data.split('-')
	data = data[2] + '/' + data[1] + '/' + data[0]

	return data
}

export function updateCNPJData (cnpj) {
	cnpj = cnpj.replace(/\./g, '')
	cnpj = cnpj.replace('/', '')
	cnpj = cnpj.replace('-', '')

	return cnpj
}

export function updateNumeroData (num) {
	num = num.replace(' ', '')
	num = num.replace('-', '')

	return num
}

export function updateDddData (ddd) {
	ddd = ddd.replace('(', '')
	ddd = ddd.replace(')', '')

	return ddd
}

export function updateCepData (cep) {
	cep = cep.replace('-', '')

	return cep
}

// Função para Buscar as cidades e paises

export async function buscaPaises () {
	try {
		let response = await RestConnection.get('/pais/buscaTodos')
		// console.log(response.data)
		return response.data
		// return paises
	} catch (e) {
		if (e.response.status === 400) {
			alert(e.response.data.text_message)
		}
	}
}

export async function buscaCidades () {
	try {
		let response = await RestConnection.get('/cidade/buscaTodos')
		// console.log(response.data)
		return response.data
	} catch (e) {
		if (e.response.status === 400) {
			alert(e.response.data.text_message)
		}
	}
}

// Função para buscar Telefone e Endereço tipos

export async function buscaTelefoneTipos () {
	try {
		let response = await RestConnection.get('/telefone/buscaTipos')
		return response.data
	} catch (e) {
		if (e.response.status === 400) {
			alert(e.response.data.text_message)
		} else {
			alert('Houve um erro! Por favor tente novamente.')
		}
	}
}

export async function buscaEnderecoTipos () {
	try {
		let response = await RestConnection.get('/endereco/buscaTipos')
		return response.data
	} catch (e) {
		if (e.response.status === 400) {
			alert(e.response.data.text_message)
		} else {
			alert('Houve um erro! Por favor tente novamente.')
		}
	}
}

export async function buscaTodosClientePessoaFisica () {
	try {
		let response = await RestConnection.get('/cliente/busca/todos/pessoa/fisica')
		return response.data
	} catch (e) {
		if (e.response.status === 400) {
			alert(e.response.data.text_message)
		} else {
			alert('Houve um erro! Por favor tente novamente.')
		}
	}
}

export async function buscaTodosClientePessoaJuridica () {
	try {
		let response = await RestConnection.get('/cliente/busca/todos/pessoa/juridica')
		return response.data
	} catch (e) {
		if (e.response.status === 400) {
			alert(e.response.data.text_message)
		} else {
			alert('Houve um erro! Por favor tente novamente.')
		}
	}
}

export async function buscaTodosEstabelecimento () {
	try {
		let response = await RestConnection.get('/estabelecimento/buscar')
		return response.data.conteudo
	} catch (e) {
		if (e.response.status === 400) {
			alert(e.response.data.text_message)
		} else {
			alert('Houve um erro! Por favor tente novamente.')
		}
	}
}

export async function buscaListaServicos () {
	try {
		let response = await RestConnection.get('/servico/buscar')
		return response.data
	} catch (e) {
		console.log(e)
		if (e.response.status === 400) {
			alert(e.response.data.text_message)
		}
	}
}

export async function buscaListaPacotes () {
	try {
		let response = await RestConnection.get('/servico/pacote/buscar')
		return response.data
	} catch (e) {
		console.log(e)
		if (e.response.status === 400) {
			alert(e.response.data.text_message)
		}
	}
}

export async function buscaListaServicosPacotes () {
	try {
		let response = await RestConnection.get('/servico/servicoPacote/busca')
		return response.data
	} catch (e) {
		console.log(e)
		if (e.response.status === 400) {
			alert(e.response.data.text_message)
		}
	}
}

export async function buscarTodosProdutos () {
	try {
		let response = await RestConnection.get('/produto/buscar/todos')
		return response.data
	} catch (e) {
		console.log(e)
		if (e.response.status === 400) {
			alert(e.response.data.text_message)
		}
	}
}

export async function buscarTodosSegmentoEstabelecimento () {
	try {
		let response = await RestConnection.get('/segmento/estabelecimento/buscar/todos')
		return response.data
	} catch (e) {
		console.log(e)
		if (e.response.status === 400) {
			alert(e.response.data.text_message)
		}
	}
}

export async function buscarTodosSegmentos () {
	try {
		let response = await RestConnection.get('/segmento/buscar')
		return response.data
	} catch (e) {
		console.log(e)
		if (e.response.status === 400) {
			alert(e.response.data.text_message)
		}
	}
}

export async function buscarTodosInstituicao () {
	try {
		let response = await RestConnection.get('/instituicao/buscar/todos')
		return response.data
	} catch (e) {
		console.log(e)
		if (e.response.status === 400) {
			alert(e.response.data.text_message)
		}
	}
}
