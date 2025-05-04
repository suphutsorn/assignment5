pipeline {
    agent any

    tools {
        nodejs 'NodeJS_18' // ชื่อต้องตรงกับที่ตั้งไว้ใน Jenkins config
    }

    stages {
        stage('Clone') {
            steps {
                echo "Cloning repo..."
                checkout scm
            }
        }
        stage('Install') {
            steps {
                echo "Installing dependencies..."
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo "Building React project..."
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo "Running tests..."
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying..."
                // เช่น copy ไปยัง /var/www หรือ run 'serve -s dist'
            }
        }
    }
}
