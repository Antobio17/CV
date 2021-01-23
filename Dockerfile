# Load image
FROM python:3.7-alpine

# Set the working directory
WORKDIR /app
# Aggregate the app
COPY . /app
# Install the requirements
RUN pip install -r requirements.txt

# Enviroment variables
ENV FLASK_APP app.py
ENV FLASK_RUN_HOST 0.0.0.0
ENV FLASK_ENV development

# Run flask app
CMD ["flask", "run"]