import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import styles from "../styles/brand.module.scss";

export default function Brand(props: { isBlue: boolean }) {
  return (
    <div className={props.isBlue ? styles.blueLogo : styles.whiteLogo}>
      <BubbleChartIcon fontSize='large' />
      <h2>ΟΡΙΟΝΜΠÓΡΔ</h2>
    </div>
  )
}