.PHONY: build

build:
	docker build -t demo-todo-frontend .

run:
	docker run --rm -p 5173:5173 demo-todo-frontend