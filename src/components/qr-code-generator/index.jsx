import { useState } from 'react'
import QRCode from 'react-qr-code'
import './styles.css'


export default function QRCodeGenerator() {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    function handleGenerateQrCode(info) {
        setQrCode(input)
    }

    return (
        <div className='sad'>
            <h1>QR Code Generator</h1>
            <div style={{marginBottom: '20px'}}>
                <input onChange={(e) => setInput(e.target.value)} type="text" name="" placeholder="Enter your info" />
                <button disabled={input && input.trim() !== "" ? false : true} onClick={handleGenerateQrCode}>Generate</button>
            </div>
            <div>
                <QRCode
                    id="qr-code-value"
                    value={qrCode}
                    size={400}
                    bgColor="#fff" />
            </div>
        </div>
    )
}