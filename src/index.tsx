import { Hono } from 'hono'
import { env } from 'hono/adapter'
import { renderer } from './renderer'
import IndexPage from './IndexPage'
import AboutPage from './AboutPage'
import CurriculumVitaePage, { fetchCVData } from './CVPage'
import CurriculumVitaePageKT, { fetchCVData as fetchCVDataKT } from './CVKTPage'
import './styles.scss'

const app = new Hono();

app.use(renderer);

app.get('/', (c) => c.render(<IndexPage />));
app.get('/about', (c) => c.render(<AboutPage />));
app.get('/cv', async (c) => {
  const { data, build_date } = await fetchCVData();
  return c.render(<CurriculumVitaePage data={data} build_date={build_date} />);
})
app.get('/cv-kt', async (c) => {
  const { data, build_date } = await fetchCVDataKT();
  return c.render(<CurriculumVitaePageKT data={data} build_date={build_date} />);
})
app.get('/spir', (c) => {
  const { ADJUST_SCHEDULE_URL } = env<{ ADJUST_SCHEDULE_URL: string }>(c);
  return c.redirect(ADJUST_SCHEDULE_URL, 302);
});

export default app
