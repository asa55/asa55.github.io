# Machine Learning and Artificial Intelligence Algorithms

## Clarification on Terminology

1. Artificial intelligence contains machine learning as a subdiscipline

2. Career titles:
   * Data Analytics: provides insights intended to improve products or business outcomes
   * Data Engineering: responsible for defining and maintaining data pipelines, usually maintaining ownership over relevant database / data warehouse / data lake systems
   * Data Science: models the data and extracts meaning from it (definitely the most glorified, rightly so in bleeding-edge R&D groups but not so much for the vast majority of engineering teams applying off-the-shelf ML algorithms)

## Types of ML

1. Supervised learning (used for classification and regression) is less data-hungry than
2. Unsupervised learning (used for clustering) is less data hungry than
3. Reinforcement learning (used for learning through interactions)

Arguably there are other topics that get bundled in with ML but this captures the lion's share of the market.

## Common Algorithms

![sklearn algos](https://scikit-learn.org/stable/_static/ml_map.png)

Linear regression and polynomial models
Gradient descent
Bias-variance tradeoff, generalization error, irreducable error, bias & variance plots, cubic splines
Training and test sets (training error should be similar to test error)
Mean Square Error decomposition
Multiple regression, regularization, lasso regression, ridge regression
Sparsity, complexity, interpretability
Logistic regression, cost functions, likelihood functions, accuracy, precision, recall
1 vs all, all vs all, validation, k-fold cross validation, multiclass classification, kNN, feature engineering, curse of dimensionality, PCA, LDA, swap sampling
prep data (vast majority of time), choose model, train, deploy, monitor
7 deadly sins of big data
decision trees, boosting, bagging, bootstrapping, (extremely) random forests, ensemble modeling
Discriminitive vs generative modeling
Naive Bayes, t-SNE, autoencoders, variational autoencoders
SVMs, maximal margin classifiers, support vector classifiers, hinge loss, kernel trick, support vector regression
Neural nets, activation functions, LeNet-5, nn playground, backprop, preventing overfitting
Augmentation, regularization, dropout, batch, annealing, momentum, weight initialization, ADAM, RMSProp, Adagrad
Fully connected networks, CNNs, max pooling, AlexNet, Vgg-16, Inception, ResNet, DenseNets
GANs, style transfer, deep dream, RNNs
k-means, Gaussian mixture models, EM clustering, hierarchical clustering, density estimation
NLP, spam filtering, POS tagging, NEE, NER, sentiment analysis, word sense disambiguation, question answering, paraphrasing, summarization, co-reference resolution, tf-idf, topic modeling, latent Dirichlet allocation
