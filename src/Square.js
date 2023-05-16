import React from 'react';

const Square = (props) => {
  const style = (props.value ? `${props.value} btn` : `btn`) + (props.winnerHighlight ? `highlight` : ``);

  return(
    <div>
      <button className={style} onClick={() => props.onClick()}>{props.value}</button>
    </div>
  );
}

export default Square;