from flask import Flask, render_template, request
import qrcode
from io import BytesIO


app = Flask(__name__)

@app.route("/")
def generate_qr():
    
    text = request.args.get('text', '')
    
    qr = qrcode.QRCode()
    qr.add_data(text)
    qr.make(fit=True)

    img = qr.make_image()

    img_io = BytesIO()
    img.save(img_io, 'PNG')
    img_io.seek(0)


    return render_template("index.html", title="Hello")