import BubbleChartIcon from '@mui/icons-material/BubbleChart';

export default function Brand(props: { isBlue: boolean }) {

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      marginLeft: "auto",
      marginRight: "auto",
      fontFamily: "Roboto Slab",
      color: props.isBlue ? "#2577fa" : "#fff"
    }}>
      <BubbleChartIcon fontSize='large' />
      <h2>ΟΡΙΟΝΜΠÓΡΔ</h2>
    </div>
  )
}