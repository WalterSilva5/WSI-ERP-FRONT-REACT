import axios from "axios";

class ApiProdutos {
    url = "http://localhost:8595/produtos/";

    cadastrar(data) {
        let req = {
            method: "post",
            url: this.url,
            data: data,
        };

        var resultado = axios(req)
            .then((result) => {
                return result;
            })
            .catch((error) => {
                return error;
            });
        return resultado;
    }
}

export default ApiProdutos;