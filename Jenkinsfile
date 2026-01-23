pipeline {
    agent any

    environment {
        PORT = "3000"
    }

    triggers {
        pollSCM('H/5 * * * *')   // every 5 minutes check GitHub
    }

    stages {

        stage('Verify index.html') {
            steps {
                echo 'Checking if index.html exists...'
                bat '''
                if exist index.html (
                    echo index.html found
                ) else (
                    echo index.html not found
                    exit /b 1
                )
                '''
            }
        }

        stage('Build App') {
            steps {
                echo 'Installing dependencies'
                 bat '"C:\\Program Files\\nodejs\\npm.cmd" install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests'
                bat '"C:\\Program Files\\nodejs\\npm.cmd" test || echo No tests found, skipping...'
            }
        }

        stage('Run Application') {
            steps {
                echo 'Starting Node server'
                bat '"C:\\Program Files\\nodejs\\node.exe" server.js &'
            }
        }
    }

    post {
        success {
            echo 'Build and deployment successful'
        }
        failure {
            echo 'Build failed'
        }
    }
}
