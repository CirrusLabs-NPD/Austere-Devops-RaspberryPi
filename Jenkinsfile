pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'shaikhayeman95/my-express-app:latest'
        GITHUB_REPO = 'https://github.com/CL-ayeman/Austere-Devops-Project.git'
        GITHUB_PAT_CREDENTIALS = 'github-token'
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Clone the private GitHub repository using GitHub PAT
                    withCredentials([string(credentialsId: 'github-token' env.GITHUB_PAT_CREDENTIALS, variable: 'GITHUB_PAT')]) {
                        sh "git clone ${env.GITHUB_REPO}"
                        // Optional: Configure Git to use the PAT for authentication
                        sh "git config --global credential.helper store"
                        sh "echo ${env.GITHUB_PAT} | git credential approve"
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image
                    sh "docker build -t ${env.DOCKER_IMAGE} ."
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
