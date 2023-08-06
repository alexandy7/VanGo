import React from "react";
import Beneficios from "../../Componentes/Beneficios/Beneficios";
import QuemSomos from "../../Componentes/QuemSomos/QuemSomos";
import "./Home.modules.css";
import logo from "../../Assets/Logo_Vango1.png"
import Logo2 from "../../Assets/LogoVango4.png"
import familia from "../../Assets/istockphoto-874911746-170667a.jpg"
import Seta from "../../Assets/seta5.png"
import gif from "../../Assets/gif3.gif"
import Seguranca from "../../Assets/Seguranca.png"
import Agilidade from "../../Assets/Agilidade2.png"
import Comunicacao from "../../Assets/Comunicacao.png"
import Tecnologia from "../../Assets/Tecnologia.png"
import Portabilidade from "../../Assets/Portabilidade.png"
import Organigacao from "../../Assets/Organizacao2.png"
import Ana from "../../Assets/aa.jpg"
import Joao from "../../Assets/Joao.jpeg"
import Carlos from "../../Assets/Carlos2.jpeg"
import Yago from "../../Assets/Yago.jpg"
import Thais from "../../Assets/Thais.jpeg"
import Gif2 from "../../Assets/gif4.gif"
import Instagram from "../../Assets/Instagram.png"
import PlayStore from "../../Assets/PlayStore.png"
import Suporte from "../../Assets/Suporte2.png"
export default function Home() {

    return (
        <div id="DivPrincipal">
            <header class="menu-hide" id="menu">
                <nav role="navigation" id="navGeral">
                    <div id="menuNav">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="textMenu">
                            <li>
                                <a href=".">Simule agora mesmo</a>
                            </li>
                            <li>
                                <a href=".">Institucioanal</a>
                            </li>
                            <li>
                                <a href=".">Mídia</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <a href="#Section1">
                    <img src={logo} alt="Logo" />
                </a>
                <nav id="Navegacoes">
                    <ul id="UlNavegacoes">
                        <li><a href="#section2">Sobre</a></li>
                        <li><a href="#Section4">Vantagens</a></li>
                        <li><a href="#Section5">Quem somos?</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section id="Section1">
                    <div id="Div1Section1">
                        <h1>
                            <p>Seu transporte escolar seguro e moderno!</p>
                        </h1>
                    </div>
                    <div className="Div2Section1">
                        <img src={Logo2} alt="" />
                    </div>
                    <div id="DivSeta">
                        <a href="#section2">
                            <img src={Seta} alt="" />
                        </a>
                    </div>
                </section>

                <section id="section2">
                    <div id="DivFtImg2Section2">
                        <div id="TextSection2">
                            <h2 id="h2Section2">Oque é o VanGo?</h2>
                            <p>VanGo é seu parceiro tecnológico para o transporte escolar! Facilidade, comunicação e agilidade se unem para proporcionar uma experiência segura e moderna. Simplifique o processo e leve a gestão das vans escolares para o próximo nível com o VanGo!</p>
                        </div>
                        <div>
                            <img src={familia} alt="Familia feliz" id="ImagemSection2" />
                        </div>
                    </div>
                </section>


                <section id="Section4">
                    <div id="DivGeralSection4">
                        <h2 id="h2Section4">Quais são as vantagens?</h2>

                        <div id="DivSection4">
                            <Beneficios imagem={Seguranca} titulo={"Segurança"}></Beneficios>
                            <Beneficios imagem={Agilidade} titulo={"Agilidade"}></Beneficios>
                            <Beneficios imagem={Comunicacao} titulo={"Comunicação"}></Beneficios>
                        </div>
                        <div id="Div2Section4">
                            <Beneficios imagem={Tecnologia} titulo={"Tecnologia"}></Beneficios>
                            <Beneficios imagem={Organigacao} titulo={"Organigacao"}></Beneficios>
                            <Beneficios imagem={Portabilidade} titulo={"Portabilidade"}></Beneficios>
                        </div>
                    </div>
                </section>

                <section id="Section3">
                    <div id="DivAnimacaoSection3">
                        <img src={gif} alt="" />
                    </div>
                </section>
                <section id="Section5">
                    <br />
                    <br />
                    <br />
                    <br />

                        <h2 id="DivH2Section5">Mas, quem somos nós?</h2>
                    
                    <div id="DivGeralSection5">
                        <QuemSomos foto={Ana} direcao="row" descricao={"Esta é a Ana, ela que é responsável por todo o design do projeto, incluindo o mobile e a web. Ana possui 17 anos e tem interesse de seguir na carreira de programadora Front-end UI."}></QuemSomos>
                        <QuemSomos foto={Joao} direcao="row-reverse" descricao={"João, ele é responsável pela parte de gerenciamento do banco de dados (MySql). Possui 17 anos e tem interesse de seguir na carreira de     FullStack"}></QuemSomos>
                        <QuemSomos foto={Carlos} direcao="row" descricao={"Este é o Carlos, onde por meio de uma votação se tornou gerente do projeto. Carlos é responsável pela administração do projeto, captação de clientes e desenvolvimento do Back-end. Pretende seguir carreira como programador Back-end mobile ou programação em nuvem."}></QuemSomos>
                        <QuemSomos foto={Yago} direcao="row-reverse" descricao={"Yago é responsável pelo desenvolvimento do Front-end (React Native e ReactJs). Yago atualmente trabalha na área de TI e possui intenção de seguir a carreira como desenvolvedor Back-end."}></QuemSomos>
                        <QuemSomos foto={Thais} direcao="row" descricao={"Esta é a Thais, a responsável por toda a documentação do projeto. Thais tem 18 anos, é formada em Gestão de TI na ryudald e pretende trabalhar como Analista de sistemas."}></QuemSomos>
                    </div>
                </section>

            </main>

            <div id="Gif2">
                <img src={Gif2} alt="" />
            </div>
            <footer>
                <div id="Contatos">
                    <img src={PlayStore} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Suporte} alt="" />
                </div>
                <p>© VanGo ©</p>
            </footer>
        </div>
    )
}