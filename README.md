# Beat The Model: educating and empowering Lehigh Valley youth using statistics and statistical modeling

## Project Description
We built an educational website to teach basic statistics to Lehigh Valley students through statistical modeling used to predict scores of Lehigh-Lafayette football games. This website includes an educational page and a game where you face off against our own model to predict the outcome of Le-Laf! 

## Impact on Education
Our goal in creating this game is to address educational inequality in the Lehigh Valley. By offering an interactive and educational experience that incorporates statistics and critical thinking, we aim to provide a learning platform accessible to a wide range of students despite their backgrounds. We believe that by fostering an interest in statistics and analytical thinking through the excitement of football predictions, we can contribute to leveling the playing field and promoting educational empowerment in our community.

## Technical Approach
AWS Sagemaker was used to prototype multiple models including LR, SVM, and Decision Tree classifiers. We compared accuracies and ran hyperparmater tuning with kfold cross validation to get a model that ran with approx. 70% accuracy. This was then deployed to AWS Lambda where an API endpoint was used to allow our website to interact with it.

## Amazon Products Used
-**SageMaker**: Prototype, train, hyperparameter tune hyperparameters  
-**Lambda**: Train the model, and predict a random year  
-**API Endpoint**: Allow internet traffic to access lambda function  
-**Amplify**: Deploying the website  
-**S3**: Store training data  
-**VPC**: Allow AWS services to talk to each other  
-**IAM**: Set permissions for users running lambda  
-**Bookerly Font**: Used on website  


## More Information
Check out [Our Slideshow](https://docs.google.com/presentation/d/1W1nTe5TKPeGjA40EOYCbuNmBvycZxur_eQeMa1QSNRI/edit?usp=sharing) for more information  
All data for model sourced from wikipedia

