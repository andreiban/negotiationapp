import React, { useState } from "react";

function StatusStep({ number, hide }) {
  let classValue = hide
    ? "mr-1 progress-bar progress-bar-warning progress-width bg-warning"
    : "mr-1 progress-bar progress-bar-warning progress-width bg-warning progress-hide";

  if (number >= 5 && number <= 7) {
    return (
      <div className={classValue} role="progressbar">
        {number}
      </div>
    );
  } else if (number > 7) {
    return (
      <div className={classValue} role="progressbar">
        {number}
      </div>
    );
  } else
    return (
      <div className={classValue} role="progressbar">
        {number}
      </div>
    );
}

export default StatusStep;
