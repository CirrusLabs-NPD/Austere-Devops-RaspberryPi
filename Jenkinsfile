pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'shaikhayeman95/my-express-app:latest'
        GITHUB_REPO = 'https://github.com/CirrusLabs-NPD/Austere-Devops-RaspberryPi.git'
    }

    stages {
        stage('Checkout') {
            steps {
                // Clone the public GitHub repository
                sh "git clone ${env.GITHUB_REPO}"
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Change to the repository directory
                    dir('your-public-repo') {
                        // Build the Docker image
                        sh "docker build -t ${env.DOCKER_IMAGE} ."
                    }
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Push the Docker image to Docker Hub
                    withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'DOCKER_HUB_USERNAME', passwordVariable: 'DOCKER_HUB_PASSWORD')]) {
                        sh "docker login -u $DOCKER_HUB_USERNAME -p $DOCKER_HUB_PASSWORD"
                    }
                    sh "docker push ${env.DOCKER_IMAGE}"
                }
            }
        }
    }

    post {
        success {
        }
    }
}
