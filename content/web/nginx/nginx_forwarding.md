---
title: "Nginx Forwarding"
date: 2025-02-15T12:00:00+00:00
---

# Experiments with Nginx Forwarding

## Experiment 1: Direct Request to Localhost (IP-based)

### Client Command

```bash
curl http://localhost:3000
```

### Server Request

```
GET / HTTP/1.1
Host: localhost:3000
User-Agent: curl/7.88.1
Accept: */*
```

---

## Experiment 2: Direct Request to 127.0.0.1 (IP-based)

### Client Command

```bash
curl http://127.0.0.1:3000
```

### Server Request

```
GET / HTTP/1.1
Host: 127.0.0.1:3000
User-Agent: curl/7.88.1
Accept: */*
```

---

## Experiment 3: Request Through Nginx Proxy (Without Custom Headers)

### Client Command

```bash
curl http://test.mxroute.xyz
```

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name test.mxroute.xyz;
    location / {
        proxy_pass http://127.0.0.1:3000;
    }
}
```

### Server Request

```
GET / HTTP/1.0
Host: 127.0.0.1:3000
Connection: close
User-Agent: curl/8.10.1
Accept: */*
```

---

## Experiment 4: Request Through Nginx Proxy (With Custom Headers)

### Client Command

```bash
curl http://test.mxroute.xyz
```

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name test.mxroute.xyz;
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Server Request

```
GET / HTTP/1.0
Host: test.mxroute.xyz
X-Forwarded-For: 103.15.228.94
X-Forwarded-Proto: http
Connection: close
User-Agent: curl/8.10.1
Accept: */*
```
