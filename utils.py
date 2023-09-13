import json
import numpy as np
import onnxruntime
from tensorflow.keras.applications.resnet50 import preprocess_input

model = onnxruntime.InferenceSession('models/model.onnx')

def load_class_data(path='class_data.json'):
    with open(path, 'r', encoding='utf-8') as f:
        class_data = json.load(f)
    return class_data

def preprocess_image(image):
    image = image.resize((224, 224))
    image = np.array(image)[None, ...]
    image = preprocess_input(image)
    return image

def predict_image(image):
    preprocessed_image = preprocess_image(image)
    predictions = model.run(None, {'resnet50_input': preprocessed_image})
    return predictions[0]