
const Link = (props) => {
    return(
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    )
}

const Header = () => {
    return (
        <header className="header">
            <div className="container block">
                <Link  className="logo link">wd</Link>
                <button className="menu__media"><img src="./img/three-horizontal-bars_icon-icons.com_71070.svg" alt="Menu" className="menu__media-img" /></button>
                <nav className="navigation">
                    <Link className="link nav__item">Главная</Link>
                    <Link className="link nav__item">Об авторе</Link>
                    <Link className="link nav__item">Работы</Link>
                    <Link className="link nav__item">Процесс</Link>
                    <Link className="link nav__item">Контакты</Link>
                </nav>
            </div>
        </header>
    )
}

const Hero = () => {
    return(
    <section className="section section__hero">
		<div className="container block">
			<img src="img/notebook.png" alt="ноутбук" className="hero__img" />
			<div className="hero__info">
				<h1 className="hero__title">Дизайн и верстка</h1>
				<p className="hero__desc desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corporis dolor dicta
					placeat rem autem, libero, porro architecto dolorem distinctio ipsa natus nisi animi eius earum unde,
					veniam optio ipsum?</p>
				<button className="button button--primary">Написать мне</button>
			</div>
		</div>
	</section>
    )
}

const About = () => {
    return(
        <section className="about">
            <div className="container">
                <div className="section__header">
                    <h2 className="section__title">
                        Обо мне
                    </h2>
                    <p className="about__desc section__desc">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga beatae saepe
                        ducimus tempora itaque, sit vel dolorem voluptates perspiciatis tenetur fugiat cumque commodi mollitia
                        molestias adipisci a maiores blanditiis aliquam.
                    </p>
                </div>
            </div>
        </section>
    )
}

const Projects = () =>{
    return(
        <section className="projects">
            <div className="container">
                <div className="projects__inner">
                    <div className="projects__item">
                        <img className="projects__item-img" src="img/project.svg" alt="Примеры работ" />
                        <div className="projects__item-content">
                            <h3 className="projects__item-number">40+</h3>
                            <p className="projects__item-text">проектов</p>
                        </div>
                    </div>
                    <div className="projects__item">
                        <img className="projects__item-img" src="img/project.svg" alt="Примеры работ" />
                        <div className="projects__item-content">
                            <h3 className="projects__item-number">40+</h3>
                            <p className="projects__item-text">проектов</p>
                        </div>
                    </div>
                    <div className="projects__item">
                        <img className="projects__item-img" src="img/project.svg" alt="Примеры работ" />
                        <div className="projects__item-content">
                            <h3 className="projects__item-number">40+</h3>
                            <p className="projects__item-text">проектов</p>
                        </div>
                    </div>
                    <div className="projects__item">
                        <img className="projects__item-img" src="img/project.svg" alt="Примеры работ" />
                        <div className="projects__item-content">
                            <h3 className="projects__item-number">40+</h3>
                            <p className="projects__item-text">проектов</p>
                        </div>
                    </div>
                    <div className="projects__item">
                        <img className="projects__item-img" src="img/project.svg" alt="Примеры работ" />
                        <div className="projects__item-content">
                            <h3 className="projects__item-number">40+</h3>
                            <p className="projects__item-text">проектов</p>
                        </div>
                    </div>
                    <div className="projects__item">
                        <img className="projects__item-img" src="img/project.svg" alt="Примеры работ" />
                        <div className="projects__item-content">
                            <h3 className="projects__item-number">40+</h3>
                            <p className="projects__item-text">проектов</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Skill = () =>{
    return(
        <section className="skill">
            <div className="container">
                <div className="skill__inner">
                    <div className="skill__content">
                        <h2 className="section__title">Мои навыки</h2>
                        <div className="skill__item">
                            <p className="skill__program">Adobe Photoshop</p>
                            <div className="liner liner-1"></div>
                        </div>
                        <div className="skill__item">
                            <p className="skill__program">Adobe Photoshop</p>
                            <div className="liner liner-2"></div>
                        </div>
                        <div className="skill__item">
                            <p className="skill__program">Adobe Photoshop</p>
                            <div className="liner liner-3"></div>
                        </div>
                    </div>
                    <img className="skill__img" src="img/me.png" alt="Любимый я" />
                </div>
            </div>
        </section>
    )
}

const How = () => {
    return(
        <section className="how">
            <div className="container">
                <div className="section__header">
                    <h2 className="section__title">
                        Как я работаю
                    </h2>
                    <p className="section__desc">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga beatae saepe
                        ducimus tempora itaque, sit vel dolorem voluptates perspiciatis tenetur fugiat cumque commodi mollitia
                        molestias adipisci a maiores blanditiis aliquam.
                    </p>
                </div>
                <a className="how__img-box" href="#">
                    <img className="how__img" src="img/video.jpg" alt="Видео" />
                </a>
            </div>
        </section>
    )
}

const Pictures = () => {
    return(
        <section className="pictures">
            <div className="pictures__row">
                <div className="pictures__row-item">
                    <Link href="#" className="pictures__row-link">
                        <img className="pictures__item-img" src="img/pictures/pic-1.jpg" alt="Пример работ" />
                    </Link>
                </div>
                <div className="pictures__row-item">
                    <Link href="#" className="pictures__row-link">
                        <img className="pictures__item-img" src="img/pictures/pic-2.jpg" alt="Пример работ" />
                    </Link>
                </div>
                <div className="pictures__row-item">
                    <Link href="#" className="pictures__row-link">
                        <img className="pictures__item-img" src="img/pictures/pic-1.jpg" alt="Пример работ" />
                    </Link>
                </div>
                <div className="pictures__row-item">
                    <Link href="#" className="pictures__row-link">
                        <img className="pictures__item-img" src="img/pictures/pic-2.jpg" alt="Пример работ" />
                    </Link>
                </div>
            </div>

            <div className="pictures__row">
                <div className="pictures__row-item">
                    <Link href="#" className="pictures__row-link">
                        <img className="pictures__item-img" src="img/pictures/pic-2.jpg" alt="Пример работ" />
                    </Link>
                </div>
                <div className="pictures__row-item">
                    <Link href="#" className="pictures__row-link">
                        <img className="pictures__item-img" src="img/pictures/pic-1.jpg" alt="Пример работ" />
                    </Link>
                </div>
                <div className="pictures__row-item">
                    <Link href="#" className="pictures__row-link">
                        <img className="pictures__item-img" src="img/pictures/pic-2.jpg" alt="Пример работ" />
                    </Link>
                </div>
                <div className="pictures__row-item">
                    <Link href="#" className="pictures__row-link">
                        <img className="pictures__item-img" src="img/pictures/pic-1.jpg" alt="Пример работ" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

const Partners = () => {
    return(
        <section className="partners">
            <div className="container">
                <div className="partners__inner">
                    <div className="partners__item">
                        <img className="partners__item-img" src="img/microsoft.png" alt="microsoft" />
                    </div>
                    <div className="partners__item">
                        <img className="partners__item-img" src="img/microsoft.png" alt="microsoft" />
                    </div>
                    <div className="partners__item">
                        <img className="partners__item-img" src="img/microsoft.png" alt="microsoft" />
                    </div>
                    <div className="partners__item">
                        <img className="partners__item-img" src="img/microsoft.png" alt="microsoft" />
                    </div>
                </div>
            </div>
        </section>
    )
}

const Connection = () => {
    return(
        <section className="connection">
            <div className="section__header">
                <h2 className="section__title">
                    Хотите веб-сайт?
                </h2>
                <p className="section__desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga beatae saepe
                    ducimus tempora itaque, sit vel dolorem voluptates perspiciatis tenetur fugiat cumque commodi mollitia
                    molestias adipisci a maiores blanditiis aliquam.
                </p>
            </div>
            <form className="connection__form">
                <div className="connection__input-box">
                    <input className="connection__input" type="text" placeholder="Ваше имя" />
                    <input className="connection__input" type="text" placeholder="Ваш e-mail" />
                </div>
                <textarea className="connection__textarea" placeholder="Сообщение"></textarea>
                <button type="submit" className="button button--primary connection__button">
                    ОТПРАВИТЬ
                </button>
            </form>
        </section>
    )
}

const Footer = () =>{
    return(
        <footer class="footer">
            <div class="container">
                <div class="footer__inner">
                    <div class="footer__box">
                        <h3 class="footer__name">
                            Григорьев Гриша
                        </h3>
                        <div class="footer__copyright">
                            (с) 2018. Все права защищены.
                        </div>
                    </div>
                    <div className="footer__social">
                        <a className="footer__social-link" href="#">
                            <img className="footer__social-img" src="img/vk.svg" alt="vk" />
                        </a>
                        <a className="footer__social-link" href="#">
                            <img className="footer__social-img" src="img/vk.svg" alt="vk" />
                        </a>
                        <a className="footer__social-link" href="#">
                            <img className="footer__social-img" src="img/vk.svg" alt="vk" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

const renderJSX = (
    <div>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skill />
        <How />
        <Pictures />
        <Partners />
        <Connection />
        <Footer />
    </div>
)

ReactDOM.render(renderJSX, document.getElementById('root'))