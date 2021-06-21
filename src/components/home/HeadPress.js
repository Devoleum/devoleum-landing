import '../../styles/utilities/alice-carousel.scss';
import LocalizedStrings from 'localized-strings';
import ForbesImg from '../../imgs/press/forbes.png';
import InsiderImg from '../../imgs/press/bi.png';
import MessaggeroImg from '../../imgs/press/im.png';
import FigaroImg from '../../imgs/press/figaro.jpg';

const QUOTES = [
	{
		img: ForbesImg,
		quote:
      'Forbes includes Devoleum in the 60 Women-Led Startups That Are Shaking Up Tech Across The Globe list.',
		source:
      'https://www.forbes.com/sites/allysonkapin/2018/09/19/60-women-led-startups-who-are-shaking-up-tech-across-the-globe/#6f716ea875da',
		journal: 'Forbes'
	},
	{
		img: FigaroImg,
		quote:
      "Projet d'Elisa Romondia, développe use de Devoleum, afin de certifier l'origine des huiles d'olive de son Italie natale.",
		source:
      'http://www.lefigaro.fr/secteur/high-tech/start-up/2017/10/20/32004-20171020ARTFIG00341-qui-est-derriere-novagray-la-start-up-recompensee-par-le-prix-starther.php',
		journal: 'Le Figaro'
	},
	{
		img: MessaggeroImg,
		quote:
      "Certificare la qualità dell'olio d'oliva come si fa con i diamanti, l'idea alla Sapienza.",
		source:
      'http://www.ilmessaggero.it/roma/cronaca/roma_laureati_con_il_pollice_verde_start_up_e_robot_per_i_campi_con_l_universita_il_lavoro_e_bio-3454639.html',
		journal: 'Il Messaggero'
	},

	{
		img: InsiderImg,
		quote:
      "Permettent de certifier l'huile d'olive grâce à la technologie blockchain.",
		source:
      'http://www.businessinsider.fr/startups-finalistes-starther-awards-2017',
		journal: 'Business Insider'
	}
];
export function HeadPress() {
	return (
		<div>
			<section className="devo-section container" align="center" style={{ backgroundColor: 'antiquewhite' }}>
				<div className="columns">
					{QUOTES.map((el) => (
						<div class="column col-6 col-md-12 columns" align="center" style={{ paddingBottom: '25px' }}>
							<div className="column col-2 col-md-12 col-mr-auto">
								<img src={el.img} alt="" style={{ borderRadius: '50%' }} />
							</div>
							<div className="column col-md-12 press-container">
								<div className="sub-content" align="left">
                “{el.quote}”
								</div>
								<br />
								<div className="" align="left" style={{ marginTop: '-20px' }}>
									<a href={el.source} className="" target="_blank">
										{el.journal}
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
			<svg style={{ display: 'block', backgroundColor: 'antiquewhite', marginBottom: '-5px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2ba24" fill-opacity="1" d="M0,160L80,170.7C160,181,320,203,480,192C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" /></svg>
		</div>

	);
}
