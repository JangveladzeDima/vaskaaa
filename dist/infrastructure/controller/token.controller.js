"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var TokenController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenController = void 0;
const common_1 = require("@nestjs/common");
const token_adapter_1 = require("../../domain/adapter/token.adapter");
let TokenController = TokenController_1 = class TokenController {
    constructor(tokenAdapter) {
        this.tokenAdapter = tokenAdapter;
        this.logger = new common_1.Logger(TokenController_1.name);
    }
    async getToken() {
        try {
            const token = await this.tokenAdapter.createToken();
            return {
                "success": true,
                token
            };
        }
        catch (err) {
            this.logger.error(err.message);
            throw err;
        }
    }
};
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TokenController.prototype, "getToken", null);
TokenController = TokenController_1 = __decorate([
    (0, common_1.Controller)('token'),
    __param(0, (0, common_1.Inject)(token_adapter_1.TokenAdapter)),
    __metadata("design:paramtypes", [Object])
], TokenController);
exports.TokenController = TokenController;
//# sourceMappingURL=token.controller.js.map