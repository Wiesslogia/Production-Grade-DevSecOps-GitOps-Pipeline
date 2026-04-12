<div><h1 align="centre"> Production-Grade DevSecOps GitOps Pipeline</h1></div>


## 📌 Overview

This project demonstrates a **complete production-grade DevSecOps pipeline** using modern cloud-native tools.

It automates the entire lifecycle:

> Code → Build → Security Scan → Deploy → Monitor → Alert → Scale

---

## 🧠 Architecture

<img width="451" height="961" alt="GitOps1" src="https://github.com/user-attachments/assets/84e4a7c5-63dd-4d59-a120-75fce44b330f" />

---

## ⚙️ Tech Stack

* CI: GitHub Actions
* CD (GitOps): ArgoCD
* Containerization: Docker
* Orchestration: Kubernetes
* Packaging: Helm
* Monitoring: Prometheus + Grafana
* Alerts: Alertmanager + Slack
* Security: Trivy (Image Scanning)

---

## 🔄 CI/CD Pipeline Flow

1. Developer pushes code to GitHub
2. GitHub Actions:

   * Builds Docker image
   * Scans image using Trivy
   * Pushes image to Docker Hub
3. ArgoCD:

   * Detects changes from Git
   * Deploys using Helm
4. Kubernetes:

   * Runs application
   * Auto-scales using HPA

---

## 🔐 Security (DevSecOps)

* Integrated Trivy for vulnerability scanning
* Pipeline blocks/flags critical vulnerabilities
* Secure container deployment workflow

---

## 📊 Monitoring & Alerts

* Prometheus collects metrics
* Grafana visualizes dashboards
* Alertmanager sends alerts to Slack

---

## ⚙️ Auto Scaling

* Implemented Horizontal Pod Autoscaler (HPA)
* Scales pods based on CPU usage

---

## 📁 Project Structure

```
gitops-project/
│
├── app/
├── helm-chart/
│   ├── templates/
│   │   ├── deployment.yaml
│   │   ├── service.yaml
│   │   ├── hpa.yaml
│   │   ├── servicemonitor.yaml
│   │   └── prometheus-rule.yaml
│   └── values.yaml
│
├── argocd/
│   └── application.yaml
│
├── monitoring/
│   └── alertmanager-config.yaml
│
├── .github/workflows/
│   └── ci.yaml
│
└── README.md
```

---

## 🚀 Features

* ✅ Fully automated CI/CD pipeline
* ✅ GitOps-based deployment
* ✅ Security scanning with Trivy
* ✅ Real-time monitoring & dashboards
* ✅ Slack alerting system
* ✅ Auto-scaling with HPA
* ✅ Helm-based deployment

---

## 🧪 How to Run

```bash
# Start cluster
minikube start

# Apply ArgoCD app
kubectl apply -f argocd/application.yaml

# Check pods
kubectl get pods
```

---

## 🎯 Key Learnings

* End-to-end DevOps pipeline design
* GitOps workflow using ArgoCD
* Kubernetes deployment & scaling
* Monitoring and alerting setup
* DevSecOps integration

---

## 📌 Future Improvements

* Multi-environment (dev/staging/prod)
* Ingress with domain
* Canary deployments
* AI-based anomaly detection

---

## 👨‍💻 Author

Gotam Kumar Prajapati

---


