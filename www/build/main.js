webpackJsonp([0],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_tabuleiro_tabuleiro__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(zone, navCtrl) {
        this.zone = zone;
        this.navCtrl = navCtrl;
        this.tamanhoMinimoTabuleiro = 4;
        this.tamanhoMaximoTabuleiro = 8;
        this.opcoesTamanhoTabuleiro = [];
        for (var i = this.tamanhoMinimoTabuleiro; i <= 8; i++) {
            var opcao = {
                valor: i,
                nome: i + ' X ' + i
            };
            this.opcoesTamanhoTabuleiro.push(opcao);
        }
        this.tamanhoTabuleiro = this.tamanhoMaximoTabuleiro;
        this.permitirCancelar = true;
        this.setVelocidade(1.25);
        this.status = 'inicial';
        this.pausar(false);
    }
    HomePage.prototype.alterarVelocidade = function () {
        if (this._velocidade === 0) {
            this.velocidade = 10.0;
        }
        else
            this.velocidade = 10.0 + (this._velocidade * 20 / 100);
        this.velocidade = this.velocidade / 10;
    };
    HomePage.prototype.setVelocidade = function (passosPorSegundo) {
        this.velocidade = passosPorSegundo;
        this._velocidade = ((passosPorSegundo * 10) - 10) * 100 / 20;
    };
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        if (!__WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* global */].carregado) {
            this.loading = true;
            setTimeout(function () {
                _this.loading = false;
            }, 2000);
        }
        __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* global */].carregado = true;
    };
    HomePage.prototype.calcular = function () {
        var _this = this;
        this.resetar();
        this.mostrandoSolucao = false;
        this.loading = true;
        this.pausado = false;
        this.permitirCancelar = false;
        setTimeout(function () {
            _this.tabuleiro.calcularSolucao().then(function (solucao) {
                _this.loading = false;
                _this.permitirCancelar = true;
                _this.solucaoEncontrada = solucao;
                if (solucao.passos) {
                    _this.status = 'solucionado';
                    _this.blinkStatusCard();
                    _this.tabuleiro.recalcSizes();
                    _this.mostrandoSolucao = true;
                }
                else {
                    _this.status = 'nao-solucionado';
                    _this.blinkStatusCard();
                    _this.tabuleiro.recalcSizes();
                }
            });
        }, 1000);
    };
    HomePage.prototype.resetar = function () {
        this.tabuleiro.resetar();
        this.status = 'inicial';
        this.tabuleiro.recalcSizes();
        this.mostrandoSolucao = false;
    };
    HomePage.prototype.blinkStatusCard = function () {
    };
    HomePage.prototype.alterarEstadoPausa = function () {
        console.log(this.mostrandoSolucao);
        if (!this.mostrandoSolucao) {
            //  this.tabuleiro.executarSolucao(this.solucaoEncontrada);
        }
        this.pausar(!this.pausado);
    };
    HomePage.prototype.solucaoExecutadaHandler = function () {
        var _this = this;
        this.pausarLabel = 'Reiniciar';
        setTimeout(function () {
            _this.mostrandoSolucao = false;
        }, 1000);
    };
    HomePage.prototype.visualizarPrimeiraTentativa = function () {
        this.tabuleiro.executarSolucao(this.solucaoEncontrada.passosAtePrimeiroRetrocesso);
    };
    HomePage.prototype.pausar = function (pausar) {
        this.pausado = pausar;
        if (this.tabuleiro)
            this.tabuleiro.pausarSolucao(pausar);
        if (pausar)
            this.pausarLabel = 'Continuar';
        else
            this.pausarLabel = 'Pausar';
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__components_tabuleiro_tabuleiro__["a" /* Tabuleiro */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__components_tabuleiro_tabuleiro__["a" /* Tabuleiro */])
], HomePage.prototype, "tabuleiro", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/run/media/andre/b5c7fdf2-2535-4539-85a1-1510d2e8cfe9/Arquivos/Projetos/Trabalho MD/trabalho-md-passeio-do-cavalo/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	\n	\n	<ion-grid>\n	  <ion-row>\n	    <ion-col col-12 col-md-6>\n	    	\n			<div class="status">\n	    		<ion-card>\n				  <ion-card-content *ngIf="status==\'inicial\'">\n				  \n				    <ion-card-title>\n				      Passeio do Cavalo (Knight’s Tour) - Backtracking\n				      </ion-card-title>\n				      \n				      Clique sobre alguma casa para mover o cavalo\n				  </ion-card-content>\n				  \n				  <ion-card-content *ngIf="status==\'nao-solucionado\'">\n				    <ion-card-title>\n				      Solução não encontrada\n				      </ion-card-title>\n				    <ion-grid>\n					  <ion-row>\n					    <ion-col col-12>\n					    \n					    	 <p>Profundidade alcançada na árvore de possibilidades até\n					    	  que seja necessário o primeiro retrocesso: {{solucaoEncontrada.profundidadeAtePrimeiroRetrocesso}}\n					    	  </p>\n						</ion-col>\n\n					  </ion-row>\n					  <ion-row>\n					    <ion-col col-12>\n					    	\n					    	 <p>\n					    	Número de possibilidades até esse momento: {{solucaoEncontrada.possibilidadesAtePrimeiroRetrocesso}}\n					    	  </p>\n						</ion-col>\n					  </ion-row>\n					  \n					  <br>\n					  <ion-row>\n					  	<p><button ion-button block color="light"  (click)="visualizarPrimeiraTentativa()">Visualizar primeira tentativa</button></p>\n					\n					  </ion-row>\n					</ion-grid>\n					\n				  </ion-card-content>\n				  \n				  \n				  <ion-card-content *ngIf="status==\'solucionado\'">\n				  \n				    <ion-card-title>\n				      Solução encontrada\n				      </ion-card-title>\n				    <ion-grid>\n					  <ion-row>\n					    <ion-col col-12>\n					    \n					    	 <p>Profundidade alcançada na árvore de possibilidades até\n					    	  que seja necessário o primeiro retrocesso: {{solucaoEncontrada.profundidadeAtePrimeiroRetrocesso}}\n					    	  </p>\n						</ion-col>\n\n					  </ion-row>\n					  <ion-row>\n					    <ion-col col-12>\n					    	\n					    	 <p>\n					    	Número de possibilidades até esse momento: {{solucaoEncontrada.possibilidadesAtePrimeiroRetrocesso}}\n					    	  </p>\n						</ion-col>\n					  </ion-row>\n					  \n					  <br>\n					  <ion-row>\n					  	<p><button ion-button color="light"  (click)="visualizarPrimeiraTentativa()">Visualizar primeira tentativa</button></p>\n					\n					  </ion-row>\n					</ion-grid>\n					\n				  </ion-card-content>\n				  \n				  \n				</ion-card>\n	    	</div>\n	    	\n	    	\n			<div class="options">\n			  <ion-item>\n			    <ion-label >Tamanho do tabuleiro</ion-label>\n			    \n			    <ion-select interface="popover" [(ngModel)]="tamanhoTabuleiro" >\n			      <ion-option *ngFor="let opcao of opcoesTamanhoTabuleiro" value="{{opcao.valor}}">{{opcao.nome}}</ion-option>\n			    </ion-select>=\n			  </ion-item>\n				  \n			  <div padding>\n			  \n			  	<ion-grid>\n			  		<ion-row>\n			  			<ion-col col-12 col-md-4>\n						  	 <p>\n							  	<button [disabled]="loading" ion-button block (click)="calcular()">\n							  		\n							  		<ion-spinner *ngIf="loading" class="button"></ion-spinner> \n							  		\n							  		Calcular</button>\n						  	  </p>\n			  			</ion-col>\n			  			\n			  			<ion-col col-12 col-md-4>\n			  				<p><button  color="light" [disabled]="!mostrandoSolucao" ion-button block (click)="alterarEstadoPausa()">{{pausarLabel}}</button></p>\n			  			</ion-col>\n			  			\n			  			<ion-col col-12 col-md-4>\n						  	 <p><button color="light" [disabled]="loading" ion-button block (click)="resetar()">Resetar</button></p>\n			  			</ion-col>\n			  		</ion-row>\n			  	</ion-grid>\n				  	 	  	\n				<br>\n				<br>\n				\n					\n				  <ion-item>\n				    <ion-label >Velocidade</ion-label>\n				    \n		        		<ion-range [(ngModel)]="_velocidade"  (ngModelChange)="alterarVelocidade()" min="0" max="100"></ion-range>\n						   \n				  </ion-item>\n \n  \n			  </div>\n			\n			</div>\n			\n			\n			\n	    </ion-col>\n	    \n	    <ion-col #containerTabuleiro col-12 col-md-6>\n	    	\n			<div class="tabuleiro">\n	    \n			    <tabuleiro [solucaoExecutadaHandler]="solucaoExecutadaHandler"  [velocidade]="velocidade" #tabuleiro [loading]="loading" [tamanho]="tamanhoTabuleiro"></tabuleiro>\n			</div>\n			    \n	    </ion-col>\n	    \n	  </ion-row>\n	</ion-grid>\n	\n    \n</ion-content>\n'/*ion-inline-end:"/run/media/andre/b5c7fdf2-2535-4539-85a1-1510d2e8cfe9/Arquivos/Projetos/Trabalho MD/trabalho-md-passeio-do-cavalo/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tabuleiro; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_solucao_iterativo__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Tabuleiro = (function () {
    function Tabuleiro(renderer, applicationRef, loadingCtrl) {
        this.renderer = renderer;
        this.applicationRef = applicationRef;
        this.loadingCtrl = loadingCtrl;
        this._posicaoPeca = { x: 0, y: 0 };
        this._posicaoMira = { x: 0, y: 0 };
        this.posicaoMira0 = { x: 0, y: 0 };
        this.posicaoMira1 = { x: 0, y: 0 };
        this._indiceMovimento = 0;
        this.indexExecucao = 0;
        this.miraEmUso = -1;
    }
    Object.defineProperty(Tabuleiro.prototype, "posicaoMira", {
        get: function () {
            return this._posicaoMira;
        },
        set: function (value) {
            this._posicaoMira = value;
            if (value == null) {
                this.miraEmUso = -1;
                return;
            }
            if (this.miraEmUso == 0) {
                this.posicaoMira1 = value;
                this.miraEmUso = 1;
            }
            else {
                this.posicaoMira0 = value;
                this.miraEmUso = 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabuleiro.prototype, "loading", {
        get: function () {
            return this._loading;
        },
        set: function (value) {
            var _this = this;
            this._loading = value;
            if (this.loading) {
                this.panelDisplay = 'block';
                setTimeout(function () {
                    _this.panelOpacity = 0.7;
                    _this.panelZIndex = 1000;
                }, 10);
            }
            else {
                this.panelOpacity = 0;
                this.panelZIndex = 1;
                setTimeout(function () {
                    _this.panelDisplay = 'none';
                }, 500);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tabuleiro.prototype, "tamanho", {
        get: function () {
            return this._tamanho;
        },
        set: function (value) {
            this.limparCasas();
            this._tamanho = Math.min(value, 15);
            this.linhas = [];
            for (var i = 0; i < this.tamanho; i++) {
                var linha = {
                    casas: []
                };
                var escuro = (i % 2 == 0);
                for (var j = 0; j < this.tamanho; j++) {
                    var casa = {
                        x: j,
                        y: i,
                        escuro: false
                    };
                    casa.escuro = escuro;
                    escuro = !escuro;
                    linha.casas.push(casa);
                }
                this.linhas.push(linha);
            }
            this.recalcSizes();
        },
        enumerable: true,
        configurable: true
    });
    Tabuleiro.prototype.recalcSizes = function () {
        var _this = this;
        var doc, status;
        doc = document.documentElement;
        status = document.querySelector('.status');
        var height = window.getComputedStyle(status).height;
        var _height = height.split('px')[0];
        this.containerSize = Math.min(doc.clientWidth, doc.clientHeight //- Number(_height) - 200
        );
        this.containerSize -= 100;
        var tamanhoMaximo = 60 * this.tamanho;
        if (this.containerSize > tamanhoMaximo) {
            this.containerSize = tamanhoMaximo;
        }
        if (this.tamanho)
            this.blockSize = this.containerSize / this.tamanho;
        else
            this.blockSize = 0;
        setTimeout(function () {
            var element = _this.element.nativeElement;
            _this.offsetTop = element.offsetTop;
            _this.offsetLeft = element.offsetLeft;
        }, 50);
    };
    Tabuleiro.prototype.ngOnInit = function () {
        var _this = this;
        window.onresize = this.recalcSizes.bind(this);
        document.addEventListener("DOMContentLoaded", function (event) {
            _this.recalcSizes();
            setTimeout(function () {
                _this.recalcSizes();
            }, 250);
        });
    };
    Tabuleiro.prototype.ngOnChanges = function () {
    };
    Tabuleiro.prototype.cliqueCasa = function (casa) {
        this.posicaoPeca = {
            x: casa.x,
            y: casa.y
        };
    };
    Object.defineProperty(Tabuleiro.prototype, "posicaoPeca", {
        get: function () {
            return this._posicaoPeca;
        },
        set: function (value) {
            if (this._posicaoAnteriorPeca) {
                var pos = this._posicaoAnteriorPeca;
                var casa = this.linhas[pos.y].casas[pos.x];
                casa.destacada = true;
                casa.indice = ++this._indiceMovimento;
            }
            this._posicaoPeca.x = value.x;
            this._posicaoPeca.y = value.y;
            this._posicaoAnteriorPeca = value;
        },
        enumerable: true,
        configurable: true
    });
    Tabuleiro.prototype.calcularSolucao = function () {
        var _this = this;
        return new Promise(function (fullfil, reject) {
            setTimeout(function () {
                var solucao = new __WEBPACK_IMPORTED_MODULE_2__models_solucao_iterativo__["a" /* default */](_this.tamanho, _this.posicaoPeca);
                //let solucao = new Solucao(this.tamanho, this.posicaoPeca);
                if (solucao) {
                    _this._pausarExecucao = false;
                    _this.solucao = solucao;
                    if (!solucao.passos) {
                        _this.semSolucao = true;
                    }
                    else
                        _this.executarSolucao(solucao.passos);
                }
                else {
                }
                fullfil(solucao);
            }, 1000);
        });
        /*
        let solucao = new Solucao();
        this.executarSolucao(solucao);
        */
    };
    Tabuleiro.prototype.limparCasas = function () {
        clearTimeout(this.taskProximoPasso);
        if (!this.linhas)
            return;
        for (var _i = 0, _a = this.linhas; _i < _a.length; _i++) {
            var linha = _a[_i];
            for (var _b = 0, _c = linha.casas; _b < _c.length; _b++) {
                var casa = _c[_b];
                casa.destacada = false;
                casa.indice = null;
                this._indiceMovimento = 0;
                this._posicaoAnteriorPeca = null;
            }
        }
    };
    Tabuleiro.prototype.pausarSolucao = function (pausar) {
        if (this._pausarExecucao && !pausar) {
            this._pausarExecucao = pausar;
            if (this._executarProximoPasso)
                this.resumirExecucaoPausada();
        }
        else
            this._pausarExecucao = pausar;
        if (pausar) {
            clearTimeout(this.taskProximoPasso);
        }
    };
    Tabuleiro.prototype.resumirExecucaoPausada = function () {
        this.limparCasas();
        for (var i = 0; i < this.indexExecucao; i++) {
            var passo = this.solucao.passos[i];
            var casa = this.linhas[passo.y].casas[passo.x];
            casa.destacada = true;
            casa.indice = i + 1;
            this._indiceMovimento++;
        }
        this._executarProximoPasso();
    };
    Tabuleiro.prototype.executarSolucao = function (passos) {
        var _this = this;
        this.limparCasas();
        this._pararExecucao = false;
        this.indexExecucao = 0;
        clearTimeout(this.taskProximoPasso);
        var proximoPasso = function () {
            try {
                if (_this.indexExecucao == passos.length) {
                    _this.solucaoExecutadaHandler();
                    return;
                }
                if (_this._pausarExecucao)
                    return;
                var proximo = passos[_this.indexExecucao++];
                _this.posicaoPeca = {
                    x: proximo.x,
                    y: proximo.y
                };
                if (_this.indexExecucao > 0 && _this.indexExecucao < passos.length) {
                    var proximo2 = passos[_this.indexExecucao];
                    _this.posicaoMira = {
                        x: proximo2.x,
                        y: proximo2.y
                    };
                }
                else {
                    _this.posicaoMira = null;
                }
                if (!_this._pararExecucao)
                    _this.taskProximoPasso = setTimeout(proximoPasso, 1000 / _this.velocidade);
            }
            catch (e) {
            }
        };
        this._executarProximoPasso = proximoPasso;
        proximoPasso();
    };
    Tabuleiro.prototype.resetar = function () {
        this.limparCasas();
        this._pararExecucao = true;
        this._executarProximoPasso = null;
        this.indexExecucao = null;
    };
    return Tabuleiro;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Number)
], Tabuleiro.prototype, "blockSize", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Number)
], Tabuleiro.prototype, "offsetTop", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Number)
], Tabuleiro.prototype, "offsetLeft", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], Tabuleiro.prototype, "velocidade", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Function)
], Tabuleiro.prototype, "solucaoExecutadaHandler", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('tabuleiro'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], Tabuleiro.prototype, "element", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Tabuleiro.prototype, "posicaoMira", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Tabuleiro.prototype, "loading", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], Tabuleiro.prototype, "tamanho", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Tabuleiro.prototype, "posicaoPeca", null);
Tabuleiro = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'tabuleiro',template:/*ion-inline-start:"/run/media/andre/b5c7fdf2-2535-4539-85a1-1510d2e8cfe9/Arquivos/Projetos/Trabalho MD/trabalho-md-passeio-do-cavalo/src/components/tabuleiro/tabuleiro.html"*/'	\n<ion-grid #tabuleiro style="margin: auto" [style.width]="containerSize+\'px\'" [style.padding]="0"> \n\n	<div style="\n	    background: black;\n	    position: absolute;\n	    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n	"\n	[style.width]="containerSize+\'px\'"\n	[style.height]="containerSize+\'px\'"\n	  [style.z-index]="panelZIndex"\n	 [style.opacity]="panelOpacity"\n	 [style.display]="panelDisplay"\n	\n	></div>\n	\n  <peca [velocidade]="velocidade" [x]="posicaoPeca.x" [y]="posicaoPeca.y" [blockSize]="blockSize" [tabuleiroOffsetTop]="offsetTop" [tabuleiroOffsetLeft]="offsetLeft" [tamanhoTabuleiro]="containerSize"></peca>\n	    \n  <mira [show]="miraEmUso==0" [x]="posicaoMira0.x" [y]="posicaoMira0.y" [blockSize]="blockSize" [tabuleiroOffsetTop]="offsetTop" [tabuleiroOffsetLeft]="offsetLeft" [tamanhoTabuleiro]="containerSize"></mira>\n  <mira [show]="miraEmUso==1" [x]="posicaoMira1.x" [y]="posicaoMira1.y" [blockSize]="blockSize" [tabuleiroOffsetTop]="offsetTop" [tabuleiroOffsetLeft]="offsetLeft" [tamanhoTabuleiro]="containerSize"></mira>\n	    \n  <ion-row *ngFor="let linha of linhas">\n	<casa \n			*ngFor="let casa of linha.casas" \n			(click)="cliqueCasa(casa)" \n			[escuro]="casa.escuro" \n			[destacada]="casa.destacada"\n			[indice]="casa.indice"\n			 [size]="blockSize" ></casa>\n  </ion-row>\n</ion-grid>'/*ion-inline-end:"/run/media/andre/b5c7fdf2-2535-4539-85a1-1510d2e8cfe9/Arquivos/Projetos/Trabalho MD/trabalho-md-passeio-do-cavalo/src/components/tabuleiro/tabuleiro.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
], Tabuleiro);

//# sourceMappingURL=tabuleiro.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(212);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tabuleiro_casaTabuleiro__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tabuleiro_tabuleiro__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabuleiro_peca_peca__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_tabuleiro_mira_mira__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__components_tabuleiro_tabuleiro__["a" /* Tabuleiro */],
            __WEBPACK_IMPORTED_MODULE_5__components_tabuleiro_casaTabuleiro__["a" /* CasaTabuleiro */],
            __WEBPACK_IMPORTED_MODULE_7__components_tabuleiro_peca_peca__["a" /* Peca */],
            __WEBPACK_IMPORTED_MODULE_8__components_tabuleiro_mira_mira__["a" /* Mira */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/run/media/andre/b5c7fdf2-2535-4539-85a1-1510d2e8cfe9/Arquivos/Projetos/Trabalho MD/trabalho-md-passeio-do-cavalo/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/run/media/andre/b5c7fdf2-2535-4539-85a1-1510d2e8cfe9/Arquivos/Projetos/Trabalho MD/trabalho-md-passeio-do-cavalo/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return global; });
var global = {
    carregado: false,
    iteracoesMaximas: 10
};
//# sourceMappingURL=global.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var SolucaoIterativo = (function () {
    /*
    movimentos = [
        [2, 1],
        [1, 2],
        [-1, 2],
        [-2, 1],
        
        [-2, -1],
        [-1, -2],
        [1, -2],
        [2, -1],
    
    ];
    
    */
    function SolucaoIterativo(tamanhoTabuleiro, casaInicial) {
        this.tamanhoTabuleiro = tamanhoTabuleiro;
        this.casaInicial = casaInicial;
        this.movimentos = [
            [2, -1],
            [1, -2],
            [-1, -2],
            [-2, -1],
            [-2, 1],
            [-1, 2],
            [1, 2],
            [2, 1],
        ];
        this.totalCasas = this.tamanhoTabuleiro * this.tamanhoTabuleiro;
        var possivel = this.calcularPassos();
        console.log(this);
        if (!possivel) {
            this.passos = null;
            return;
        }
        this.passos = this.getListaPassos();
    }
    SolucaoIterativo.prototype.getListaPassos = function () {
        var passos = [];
        var index;
        for (var i = 0; i < this.tamanhoTabuleiro; i++) {
            for (var j = 0; j < this.tamanhoTabuleiro; j++) {
                index = this.tabuleiro[i][j];
                if (index == 0)
                    continue;
                passos.push({
                    x: i,
                    y: j,
                    i: index
                });
            }
        }
        passos.sort(function (a, b) {
            return a.i < b.i ? -1 : 1;
        });
        return passos;
    };
    SolucaoIterativo.prototype.calcularPassos = function () {
        this.inicializarTabuleiro();
        var proximoPasso;
        //Entrar no nó inicial
        proximoPasso = {
            x: this.casaInicial.x,
            y: this.casaInicial.y
        };
        var passoInicial = proximoPasso;
        this.indexPasso = 0;
        var primeiroRetrocessoOcorrido = false;
        this.profundidadeAtePrimeiroRetrocesso = 0;
        this.possibilidadesAtePrimeiroRetrocesso = 1;
        //Representação do processo entrar em um nó
        do {
            if (!primeiroRetrocessoOcorrido) {
                this.profundidadeAtePrimeiroRetrocesso++;
            }
            //Registrar o movimento na matriz
            this.tabuleiro[proximoPasso.x][proximoPasso.y] = ++this.indexPasso;
            if (this.tabuleiroPreenchido()) {
                return true;
            }
            //Encontrar próximos subnós
            this.gerarSubNos(proximoPasso);
            //Existem subnós disponíveis?
            if (proximoPasso.possibilidades.length > 0) {
                if (!primeiroRetrocessoOcorrido) {
                    this.possibilidadesAtePrimeiroRetrocesso *= proximoPasso.possibilidades.length;
                }
                //entrar no primeiro subnó disponível
                proximoPasso = proximoPasso.possibilidades[0];
            }
            else if (proximoPasso.parent == passoInicial) {
                return false;
            }
            else {
                if (!primeiroRetrocessoOcorrido) {
                    primeiroRetrocessoOcorrido = true;
                    this.passosAtePrimeiroRetrocesso = this.getListaPassos();
                }
                var i = proximoPasso.parent.possibilidades.indexOf(proximoPasso);
                proximoPasso.parent.possibilidades.splice(i, 1);
                this.indexPasso -= 2;
                this.tabuleiro[proximoPasso.x][proximoPasso.y] = 0;
                //retornar ao nó pai
                proximoPasso = proximoPasso.parent;
            }
        } while (1 == 1);
        return false;
    };
    SolucaoIterativo.prototype.tabuleiroPreenchido = function () {
        return (this.indexPasso == this.totalCasas);
    };
    SolucaoIterativo.prototype.gerarSubNos = function (passo) {
        //Lista de subnós foi definida?
        if (!passo.possibilidades) {
            passo.possibilidades = this.getPossibilidades(passo);
        }
    };
    //Colocar em cada passo o nó pai
    SolucaoIterativo.prototype.getPossibilidades = function (passo) {
        var ret = [];
        var casaAtual = {
            x: passo.x,
            y: passo.y
        };
        for (var _i = 0, _a = this.movimentos; _i < _a.length; _i++) {
            var m = _a[_i];
            var proximaCasa = {
                x: casaAtual.x + m[0],
                y: casaAtual.y + m[1],
                parent: passo
            };
            if (this.casaValida(proximaCasa))
                ret.push(proximaCasa);
        }
        return ret;
    };
    SolucaoIterativo.prototype.casaUsada = function (casa) {
        return this.tabuleiro[casa.x][casa.y] > 0;
    };
    SolucaoIterativo.prototype.casaValida = function (casa) {
        if (casa.x < 0 || casa.y < 0)
            return false;
        if (casa.x >= this.tamanhoTabuleiro || casa.y >= this.tamanhoTabuleiro)
            return false;
        if (this.casaUsada(casa)) {
            return false;
        }
        return true;
    };
    SolucaoIterativo.prototype.inicializarTabuleiro = function () {
        this.tabuleiro = [];
        for (var i = 0; i < this.tamanhoTabuleiro; i++) {
            this.tabuleiro[i] = [];
            for (var j = 0; j < this.tamanhoTabuleiro; j++) {
                this.tabuleiro[i][j] = 0;
            }
        }
        this.indexPasso = -1;
        this.passos = [];
    };
    return SolucaoIterativo;
}());
/* harmony default export */ __webpack_exports__["a"] = (SolucaoIterativo);
//# sourceMappingURL=solucao_iterativo.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CasaTabuleiro; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CasaTabuleiro = (function () {
    function CasaTabuleiro() {
    }
    CasaTabuleiro.prototype.ngOnInit = function () {
    };
    CasaTabuleiro.prototype.ngOnChanges = function () {
        this.color = this.destacada ? '#F44336' : this.escuro ? '#9E9E9E' : '#E0E0E0';
        this.fontSize = this.size / 2;
    };
    return CasaTabuleiro;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], CasaTabuleiro.prototype, "size", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], CasaTabuleiro.prototype, "escuro", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], CasaTabuleiro.prototype, "destacada", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], CasaTabuleiro.prototype, "indice", void 0);
CasaTabuleiro = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'casa',
        template: "\n        <ion-card\n            style=\"transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\"\n\n            [style.padding]=\"0\" \n            [style.margin]=\"0\" \n            [style.width]=\"size+'px'\" \n            [style.height]=\"size+'px'\" \n            [style.background]=\"color\"\n\n    \n        >\n          <ion-card-content \n                style=\"\n                      \n                      padding: 0px;\n                  height: 100%;\n                  min-height: 100%;\n                  display: -webkit-flex;\n                  display: flex;\n                  -webkit-align-items: center;\n                  align-items: center;\n                  -webkit-justify-content: center;\n                  justify-content: center;\n                \"\n            >\n\n                <span style=\"\n                                        \n                      padding: 0px;\n                \"\n                    \n                    [style.font-size]=\"fontSize+'px'\"\n                    >{{indice}}</span>\n          </ion-card-content>\n        </ion-card>\n    "
    })
], CasaTabuleiro);

//# sourceMappingURL=casaTabuleiro.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Peca; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Peca = (function () {
    function Peca(sanitizer) {
        this.sanitizer = sanitizer;
    }
    Peca.prototype.setTransitionProp = function (tempoTransicao) {
        this.tempoTransicao = Math.min(tempoTransicao, 500);
        this.transitionProp = 'all ' + this.tempoTransicao / 2000 + 's cubic-bezier(0.4, 0, 0.2, 1)';
    };
    Peca.prototype.sanitize = function (style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    };
    Peca.prototype.ngOnChanges = function () {
        this.setPosicao();
        this.setTransitionProp(1000 / this.velocidade);
    };
    Peca.prototype.setPosicao = function () {
        var x = Math.min((this.x) * this.blockSize, this.tamanhoTabuleiro - this.blockSize);
        this.left = x + this.tabuleiroOffsetLeft;
        var y = Math.min(this.tamanhoTabuleiro - this.blockSize, (this.y) * this.blockSize);
        this.top = y + this.tabuleiroOffsetTop;
        this.width = this.blockSize;
    };
    return Peca;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], Peca.prototype, "velocidade", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], Peca.prototype, "tamanhoTabuleiro", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], Peca.prototype, "tabuleiroOffsetTop", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], Peca.prototype, "tabuleiroOffsetLeft", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], Peca.prototype, "x", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], Peca.prototype, "y", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], Peca.prototype, "blockSize", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Number)
], Peca.prototype, "top", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Number)
], Peca.prototype, "left", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Number)
], Peca.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", String)
], Peca.prototype, "transitionProp", void 0);
Peca = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'peca',template:/*ion-inline-start:"/run/media/andre/b5c7fdf2-2535-4539-85a1-1510d2e8cfe9/Arquivos/Projetos/Trabalho MD/trabalho-md-passeio-do-cavalo/src/components/tabuleiro/peca/peca.html"*/' <div #peca \n 	style="\n 		position: absolute;\n	" \n	\n	[style.transition]="sanitize(transitionProp)"\n	\n 	[style.top]="top+\'px\'" \n 	[style.left]= "left+\'px\'" \n 	[style.width]="width + \'px\'"\n >\n 	<img style="margin: 10%" src="assets/icon/cavalo.svg">\n 	\n</div>\n    \n	    '/*ion-inline-end:"/run/media/andre/b5c7fdf2-2535-4539-85a1-1510d2e8cfe9/Arquivos/Projetos/Trabalho MD/trabalho-md-passeio-do-cavalo/src/components/tabuleiro/peca/peca.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
], Peca);

//# sourceMappingURL=peca.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mira; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Mira = (function () {
    function Mira() {
    }
    Mira.prototype.ngOnChanges = function () {
        this.setPosicao();
        if (this.show)
            this.opacity = 1;
        else
            this.opacity = 0;
    };
    Mira.prototype.setPosicao = function () {
        var x = Math.min((this.x) * this.blockSize, this.tamanhoTabuleiro - this.blockSize);
        this.left = x + this.tabuleiroOffsetLeft;
        var y = Math.min(this.tamanhoTabuleiro - this.blockSize, (this.y) * this.blockSize);
        this.top = y + this.tabuleiroOffsetTop;
        this.width = this.blockSize;
    };
    return Mira;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], Mira.prototype, "tamanhoTabuleiro", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], Mira.prototype, "tabuleiroOffsetTop", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], Mira.prototype, "tabuleiroOffsetLeft", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], Mira.prototype, "x", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], Mira.prototype, "y", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], Mira.prototype, "blockSize", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], Mira.prototype, "show", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Number)
], Mira.prototype, "opacity", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Number)
], Mira.prototype, "top", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Number)
], Mira.prototype, "left", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Number)
], Mira.prototype, "width", void 0);
Mira = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'mira',template:/*ion-inline-start:"/run/media/andre/b5c7fdf2-2535-4539-85a1-1510d2e8cfe9/Arquivos/Projetos/Trabalho MD/trabalho-md-passeio-do-cavalo/src/components/tabuleiro/mira/mira.html"*/' <div #mira \n 	style="\n 		position: absolute;\n 		transition : opacity .15s cubic-bezier(0.4, 0, 0.2, 1)\n	" \n	[style.opacity]="opacity"\n 	[style.top]="top+\'px\'" \n 	[style.left]= "left+\'px\'" \n 	[style.width]="width + \'px\'"\n >\n 	<img style="padding: 10%" src="assets/icon/mira.svg">\n 	\n</div>\n    \n	    '/*ion-inline-end:"/run/media/andre/b5c7fdf2-2535-4539-85a1-1510d2e8cfe9/Arquivos/Projetos/Trabalho MD/trabalho-md-passeio-do-cavalo/src/components/tabuleiro/mira/mira.html"*/
    })
], Mira);

//# sourceMappingURL=mira.js.map

/***/ })

},[193]);
//# sourceMappingURL=main.js.map