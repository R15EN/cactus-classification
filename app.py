from flask import Flask, render_template, request
from utils import load_class_data, predict_image
from PIL import Image

app = Flask(__name__)
class_data = load_class_data(path='static/class_data.json')
classes = list(class_data.keys())

@app.route('/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        file = request.files['file']
        image = Image.open(file)
        predictions = predict_image(image)
        pred_classes = list(zip(classes, predictions[0]))
        pred_classes = sorted(pred_classes, key=lambda x: x[1], reverse=True)
        return render_template('index.html', predictions=pred_classes)
    return render_template('index.html')

@app.route('/class_text/<class_name>')
def get_class_text(class_name):
    return class_data.get(class_name, '')

if __name__ == '__main__':
    app.run(debug=False)