
import Andrew_Doerfler_Resume_Nov2023 from '../../assets/Andrew_Doerfler_Resume_Nov2023.pdf'
import './Resume.css'

export default function Resume() {
    return(
        <div className='resume-area'>
            <object data={Andrew_Doerfler_Resume_Nov2023} type="application/pdf" className='pdf-area'>
                <p>This browser does not support PDFs. Please download the PDF to view it: <a href={Andrew_Doerfler_Resume_Nov2023}>Download PDF</a>.</p>
            </object>
        </div>
    )
}