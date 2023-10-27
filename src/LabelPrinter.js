import React from 'react';
import { useReactToPrint } from 'react-to-print';
import './print.css'; // Import the CSS file

function LabelPrinter({ labelRef }) {
  const handlePrint = useReactToPrint({
    content: () => labelRef.current,
  });

  return (
    <div>
      <button onClick={handlePrint}>Print Label</button>
    </div>
  );
}

export default LabelPrinter;
