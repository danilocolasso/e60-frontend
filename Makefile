RED=\033[31m
GREEN=\033[32m
YELLOW=\033[33m
RESET=\033[0m

install build:
	@echo "$(YELLOW)Creating container network...$(RESET)"
	@docker network create --driver bridge app-network || true
	@echo "$(YELLOW)Copying env files...$(RESET)"
	@cp .env.sample .env
	@echo "$(YELLOW)Building containers...$(RESET)"
	@docker compose up -d --build


up start:
	@echo "$(YELLOW)Starting containers...$(RESET)"
	@docker compose up -d

stop:
	@echo "$(YELLOW)Stopping containers...$(RESET)"
	@docker compose stop

down:
	@echo "$(YELLOW)Stopping containers [DOWN]...$(RESET)"
	@docker compose down -v

ps status:
	@echo "$(YELLOW)Containers:$(RESET)"
	@docker compose ps

restart:
	@echo "$(YELLOW)Restarting containers...$(RESET)"
	@docker compose restart

feature:
	@echo "$(YELLOW)Creating feature...$(RESET)"
	@docker compose exec app npm run plop
