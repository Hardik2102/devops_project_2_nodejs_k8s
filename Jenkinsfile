pipeline {
    agent any
    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Hardik2102/devops_project_2_nodejs_k8s.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t hardik202/node-k8s-app .'
            }
        }
        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin'
                    sh 'docker push hardik202/node-k8s-app'
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f deployment.yaml'
                sh 'kubectl apply -f service.yaml'
            }
        }
    }
}
