---
title: 附錄：歐拉-拉格朗日方程的推導
---

我們的目標是尋找 $$S = \int_{t_1}^{t_2}\mathcal{L}(x, \dot{x}, t)dt$$ 的極小值，設極小分量$\epsilon(t)$，即使得

$$S' - S = \int_{t_1}^{t_2}(\mathcal{L}(x + \epsilon, \dot{x} + \dot{\epsilon}, t) - \mathcal{L}(x, \dot{x}, t))dt = 0$$

對$S'$進行泰勒展開

$$\mathcal{L}(x + \epsilon, \dot{x} + \dot{\epsilon}, t) = \mathcal{L}(x) + (x + \epsilon - x)\frac{\partial \mathcal{L}}{\partial x} + (\dot{x} + \dot{\epsilon} - \dot{x})\frac{\partial \mathcal{L}}{\partial \dot{x}} + ...$$

由於在$S$處取得極值，故我們舍棄二次以上項得

$$\int_{t_1}^{t_2}(\epsilon\frac{\partial \mathcal{L}}{\partial x} + \dot{\epsilon}\frac{\partial \mathcal{L}}{\partial \dot{x}})dt = 0$$

由分部積分得

$$\int_{t_1}^{t_2}dt\dot{\epsilon}\frac{\partial \mathcal{L}}{\partial \dot{x}} = \epsilon\frac{\partial \mathcal{L}}{\partial \dot{x}}\biggr\rvert_{t_1}^{t_2} - \int_{t_1}^{t_2}dt\epsilon\frac{d}{dt}(\frac{\partial \mathcal{L}}{\partial \dot{x}})$$

由於固定了起點和終點，因此我們有$\epsilon(t_1) = \epsilon(t_2) = 0$，代入得

$$\int_{t_1}^{t_2}dt\epsilon(\frac{\partial \mathcal{L}}{\partial x} - \frac{d}{dt}(\frac{\partial \mathcal{L}}{\partial \dot{x}})) = 0$$

由雷蒙引理(Du Bois-Reymond lemma)

對$[x_1, x_2]$上的連續函數$f(x)$和無窮小量$\eta(x)$，若$\int_{x_1}^{x_2}\eta(x)f(x)dx = 0$且$\eta(x_1) = \eta(x_2) = 0$，我們有$f(x) = 0$。

故

$$\frac{\partial \mathcal{L}}{\partial x} - \frac{d}{dt}(\frac{\partial \mathcal{L}}{\partial \dot{x}}) = 0$$

即歐拉-拉格朗日方程成立。