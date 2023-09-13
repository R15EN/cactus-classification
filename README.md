# Cactus Classification Project

This project focuses on classifying cactus images using deep learning techniques. We meticulously gathered, annotated, and cleaned a comprehensive dataset of various cactus species' images. For image classification, we adopted a Convolutional Neural Network (CNN) based on the ResNet architecture, known for its superior performance. Also, we developed a simple web application.

## Dataset Description

Our dataset consists of a total of 15,439 images and is structured into two main sets: Train and Test, each containing 13 subdirectories corresponding to different cactus species:

- **Train Data**: Contains training images for model training. Each subdirectory represents a cactus species and contains images belonging to that category.

- **Test Data**: Contains a separate set of images for model evaluation. Like the train set, it is organized into subdirectories by cactus species.

## Cactus Species

The following cactus species are represented in the dataset: 

- Ariocarpus
- Astrophytum
- Cephalocereus
- Cereus
- Cleistocactus
- Epiphyllum
- Gymnocalycium
- Lophophora
- Mammillaria
- Notocactus
- Rebutia
- Rhipsalis
- Ripsalidopsis

## Usage

To install and use this project, follow these steps:

1. Clone the Repository: Begin by cloning this repository to your local machine.

2. Install the required libraries
```
pip install -r requirements.txt
```
3. Training: Train the model using the provided dataset. Choose the best one.

4. Start the web application with:
```
python app.py
```
5. Open your web browser and go to http://localhost:5000 to access the application.

## Dependencies

- [Python](https://www.python.org/) (>=3.6)
- [TensorFlow](https://www.tensorflow.org/) (>=2.0)
- [NumPy](https://numpy.org/)
- [Matplotlib](https://matplotlib.org/)
- [Pandas](https://pandas.pydata.org/)
- [Scikit-learn](https://scikit-learn.org/stable/)
- [OpenCV](https://opencv.org/get-started/)
- [ONNX](https://onnx.ai/)
