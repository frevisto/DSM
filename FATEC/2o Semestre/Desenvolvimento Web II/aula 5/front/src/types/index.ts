

export interface CepContextProps {
    cep: CepProps | null;
    //observar propriedade handle, que é uma função.
    handle: (nro:string) => void;
}

export interface CepProps {
    cep: string;
    logradouro: string;
    complemento: string;
    unidade: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
  }