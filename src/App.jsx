import './App.css'
import BoxCard from './components/box-card'
import BasicInfo from './components/basic-info'
import LevelsTable from './components/levels-table'
import html2pdf from 'html2pdf.js'
function App() {
  const download = () => {
    const element = document.getElementById('report');
    html2pdf(element, {
      filename: 'report.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    }).then(() => {
      console.log('PDF generated successfully')
    })
  }
  return (
    <div id="report" className='main'>
      <h1>Calibration <span>Report</span></h1>
      <div className='button-container' data-html2canvas-ignore>
        <button onClick={download}>
          &darr; Download
        </button>
      </div>
      <BoxCard>
        <BasicInfo />
      </BoxCard>
      <div className="html2pdf__page-break"> </div>
      <BoxCard>
        <LevelsTable />
      </BoxCard>
     
    </div>
  )
}

export default App
