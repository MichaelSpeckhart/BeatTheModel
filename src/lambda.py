import json
import numpy as np
from sklearn.linear_model import LogisticRegression as lr
from sklearn.model_selection import train_test_split
import boto3
import csv
import random

def lambda_handler(event, context):
    index = random.randint(0,149)

    # Connect to S3
    bucket_name = 'beatthemodel'
    file_key = 'data.csv'
    s3_path = f's3://{bucket_name}/{file_key}'
    s3_client = boto3.client('s3')
    s3 = boto3.resource('s3')
    
    # Call S3
    response = s3_client.get_object(Bucket = bucket_name , Key = file_key)
    object_content = response['Body'].read().decode('utf-8')
    
    # convert S3 to numpy
    lines = object_content.split('\n')
    reader = list(csv.reader(lines))
    del reader[0]
    del reader[-1]
    df = np.array(reader,dtype=float)
    
    # choose features and 
    X = df[:,[2,3,4,5,6,7,8,9,10,11]]
    y = df[:,1]
    


    X_train, X_test, y_train, y_test = splitTT(index,X,y)
    
    model = lr(C= 0.02636650898730355, class_weight= 'balanced', penalty= 'l2', solver= 'liblinear')
    model.fit(X_train, y_train)
    
    # Make predictions on new data (in this case, the test set)
    y_pred = model.predict([X_test])
    
        
    return({
        "prediction":y_pred[0],
        "features":list(X_test),
        "index": index
    })


def splitTT(idx,X,y):
    mask = np.arange(X.shape[0]) != idx
    
    X_train = X[mask,:]
    X_test = X[idx,:]
    y_train = y[mask]
    y_test = y[idx]
               
    return(X_train, X_test, y_train, y_test)