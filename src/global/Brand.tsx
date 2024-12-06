import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import styles from "../styles/brand.module.scss";
import { VERSION } from './var';

export default function Brand(props: { isBlue: boolean }) {
  return (
    <div title={`Orionboard v${VERSION}`} className={props.isBlue ? styles.blueLogo : styles.whiteLogo}>
      <BubbleChartIcon fontSize='large' />
      <h2>ΟΡΙΟΝΜΠÓΡΔ</h2>
    </div>
  )
}