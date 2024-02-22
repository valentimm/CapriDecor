import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Header, Main } from "./styles"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Header>
          <div id="headerBanner">
            <img src="/logo.png" alt="logo" />
          </div>
        </Header>
        <Main>
          <form id="mainForm">
            <h2>Controle Interno</h2>
              <form id="internalControl">
                <div >
                  <label htmlFor="data">Data:</label>
                  <input type="Date" id="data" name="name" />
                </div>

                <div>
                  <label htmlFor="responsavel">Responsável técnico:</label>
                  <input type="text" id="responsavel" name="nameTech" />
                </div>

                <div>
                  <label htmlFor="observacoes">Observações:</label>
                  <input type="text" id="observacoes" name="name" />
                </div>
                <div className="checkbox">
                  <label htmlFor="orcamento"> Orçamento</label>
                  <input type="checkbox" id="orcamento" name="orcamento" value="Orçamento" />
                  <label htmlFor="pedido"> Pedido</label>
                  <input type="checkbox" id="pedido" name="pedido" value="Pedido" />
                </div>
                <div >
                  <label htmlFor="data">Data da confirmação:</label>
                  <input type="Date" id="data" name="name" />
                </div>
              </form>
            <h2>Dados do Cliente</h2>
              <form id="clientInfo">
                <div>
                  <label htmlFor="name">Nome: </label>
                  <input type="text" id="responsavel" name="Nome" />
                </div>
                <div>
                  <label htmlFor="cpf">CPF/CNPJ: </label>
                  <input type="number" id="cpf" name="Documento" />
                </div>
                <div>
                  <label htmlFor="cep">CEP: </label>
                  <input type="number" id="cep" name="CEP" />
                </div>
                <div>
                  <label htmlFor="endereco">Endereço: </label>
                  <input type="text" id="endereco" name="Endereço" />
                </div>
                <div>
                  <label htmlFor="numero">Número: </label>
                  <input type="number" id="numero" name="Número" />
                </div>
                <div>
                  <label htmlFor="bairro">Bairro: </label>
                  <input type="text" id="bairro" name="Bairro" />
                </div>
                <div>
                  <label htmlFor="cidade">Cidade: </label>
                  <input type="text" id="cidade" name="Cidade" />
                </div>
                <div>
                  <label htmlFor="telefone">Telefone: </label>
                  <input type="number" id="telefone" name="Telefone" />
                </div>
                <div>
                  <label htmlFor="contato">Contato: </label>
                  <input type="number" id="contato" name="Contato" />
                </div>
                <div>
                  <label htmlFor="email">Email: </label>
                  <input type="email" id="email" name="E-mail" />
                </div>
                <div>
                  <label htmlFor="observacoes">Como chegou:</label>
                  <input type="checkbox" id="indicação" name="indicação" value="indicação" />
                  <label htmlFor="indicação"> Indicação</label>
                  <input type="checkbox" id="instagram" name="instagram" value="instagram" />
                  <label htmlFor="instagram"> Instagram</label>
                  <input type="checkbox" id="site" name="site" value="site" />
                  <label htmlFor="site"> Site</label>
                </div>
                <div >
                  <label htmlFor="data">Data da confirmação:</label>
                  <input type="Date" id="data" name="name" />
                </div>
              </form>
            <h2>Ambiente</h2>
              <form id="ambient">
                <div>
                    <label htmlFor="ambiente01"></label>
                    <input type="text" id="ambiente01" name="Ambiente01" />
                    <label htmlFor="altura01">Altura</label>
                    <input type="text" id="altura01" name="AlturaAmbiente01" />
                    <label htmlFor="largura01">Largura</label>
                    <input type="text" id="largura01" name="LarguraAmbiente01" />
                </div>
                <div>
                    <label htmlFor="ambiente02"></label>
                    <input type="text" id="ambiente02" name="Ambiente02" />
                    <label htmlFor="altura02">Altura</label>
                    <input type="number" id="altura02" name="AlturaAmbiente02" />
                    <label htmlFor="largura02">Largura</label>
                    <input type="number" id="largura02" name="LarguraAmbiente02" />
                </div>
                <div>
                    <label htmlFor="ambiente03"></label>
                    <input type="text" id="ambiente03" name="Ambiente03" />
                    <label htmlFor="altura03">Altura</label>
                    <input type="number" id="altura03" name="AlturaAmbiente03" />
                    <label htmlFor="largura03">Largura</label>
                    <input type="number" id="largura03" name="LarguraAmbiente03" />
                </div>
              </form>
            <h2>Informações Técnicas - Modelo</h2>
              <form id="modelInfo">
                <h3>Prega</h3>
                <div>
                  <label htmlFor="pregaAmericana">Americana</label>
                  <input type="checkbox" id="americana" name="americana" />
                  <label htmlFor="pregaFêmea">Fêmea</label>
                  <input type="checkbox" id="pregaFêmea" name="PregaFêmea" />
                </div>
                <div>
                  <label htmlFor="pregaArgola">Argola</label>
                  <input type="checkbox" id="argola" name="argola" />
                  <label htmlFor="pregaMacho">Macho</label>
                  <input type="checkbox" id="pregaMacho" name="PregaMacho" />
                </div>
                <div>
                  <label htmlFor="pregaIlhós">Ilhós</label>
                  <input type="checkbox" id="Ilhós" name="Ilhós" />
                  <label htmlFor="Wave">Wave</label>
                  <input type="checkbox" id="Wave" name="Wave" />
                </div>
                <div>
                  <label htmlFor="Franzida">Franzida</label>
                  <input type="checkbox" id="Franzida" name="Franzida" />
                </div>
                <h3>Abertura</h3>
                <div>
                  <label htmlFor="Inteira">Inteira</label>
                  <input type="checkbox" id="Inteira" name="Inteira" />
                  <label htmlFor="Meio">Meio</label>
                  <input type="checkbox" id="Meio" name="Meio" />
                </div>
                <h3>Forro/Blackout</h3>
                <div>
                  <label htmlFor="Costurar junto">Costurar junto</label>
                  <input type="checkbox" id="Costurar junto" name="Costurar junto" />
                  <label htmlFor="Separado">Separado</label>
                  <input type="checkbox" id="Separado" name="Separado" />
                  <h3>Inversão</h3>
                <div>
                  <label htmlFor="Sim">Sim</label>
                  <input type="checkbox" id="Sim" name="Sim" />
                  <label htmlFor="Não">Não</label>
                  <input type="checkbox" id="Não" name="Não" />
                </div>
                <h3>Instalação</h3>
                <div>
                  <label htmlFor="Sim">Sim</label>
                  <input type="checkbox" id="Sim" name="Sim" />
                  <label htmlFor="Não">Não</label>
                  <input type="checkbox" id="Não" name="Não" />
                </div>
                </div>
              </form>
        </form>
        </Main>
    </ThemeProvider>
  )
}