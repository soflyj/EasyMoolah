/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, Inject, Injectable, Renderer2 } from '@angular/core';
import { config } from './config';
import { DOCUMENT } from '@angular/common';
import { MaskApplierService } from './mask-applier.service';
export class MaskService extends MaskApplierService {
    /**
     * @param {?} document
     * @param {?} _config
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(document, _config, _elementRef, _renderer) {
        super(_config);
        this.document = document;
        this._config = _config;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.maskExpression = '';
        this.isNumberValue = false;
        this.showMaskTyped = false;
        this.maskIsShown = '';
        // tslint:disable-next-line
        this.onChange = (_) => { };
        this.onTouch = () => { };
        this._formElement = this._elementRef.nativeElement;
    }
    /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    applyMask(inputValue, maskExpression, position = 0, cb = () => { }) {
        this.maskIsShown = this.showMaskTyped
            ? this.maskExpression.replace(/\w/g, '_')
            : '';
        if (!inputValue && this.showMaskTyped) {
            return this.prefix + this.maskIsShown;
        }
        /** @type {?} */
        const result = super.applyMask(inputValue, maskExpression, position, cb);
        Array.isArray(this.dropSpecialCharacters)
            ? this.onChange(this._removeMask(this._removeSufix(this._removePrefix(result)), this.dropSpecialCharacters))
            : this.dropSpecialCharacters === true
                ? this.onChange(this.isNumberValue
                    ? Number(this._removeMask(this._removeSufix(this._removePrefix(result)), this.maskSpecialCharacters))
                    : this._removeMask(this._removeSufix(this._removePrefix(result)), this.maskSpecialCharacters))
                : this.onChange(this._removeSufix(this._removePrefix(result)));
        /** @type {?} */
        let ifMaskIsShown = '';
        if (!this.showMaskTyped) {
            return result;
        }
        /** @type {?} */
        const resLen = result.length;
        /** @type {?} */
        const prefNmask = this.prefix + this.maskIsShown;
        ifMaskIsShown = prefNmask.slice(resLen);
        return result + ifMaskIsShown;
    }
    /**
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    applyValueChanges(position = 0, cb = () => { }) {
        /** @type {?} */
        const maskedInput = this.applyMask(this._formElement.value, this.maskExpression, position, cb);
        this._formElement.value = maskedInput;
        if (this._formElement === this.document.activeElement) {
            return;
        }
        this.clearIfNotMatchFn();
    }
    /**
     * @return {?}
     */
    showMaskInInput() {
        if (this.showMaskTyped) {
            this.maskIsShown = this.maskExpression.replace(/\w/g, '_');
        }
    }
    /**
     * @return {?}
     */
    clearIfNotMatchFn() {
        if (this.clearIfNotMatch === true &&
            this.maskExpression.length !== this._formElement.value.length) {
            this.formElementProperty = ['value', ''];
            this.applyMask(this._formElement.value, this.maskExpression);
        }
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    set formElementProperty([name, value]) {
        this._renderer.setProperty(this._formElement, name, value);
    }
    /**
     * @private
     * @param {?} value
     * @param {?} specialCharactersForRemove
     * @return {?}
     */
    _removeMask(value, specialCharactersForRemove) {
        return value
            ? value.replace(this._regExpForRemove(specialCharactersForRemove), '')
            : value;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _removePrefix(value) {
        if (!this.prefix) {
            return value;
        }
        return value
            ? value.replace(this.prefix, '')
            : value;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _removeSufix(value) {
        if (!this.sufix) {
            return value;
        }
        return value
            ? value.replace(this.sufix, '')
            : value;
    }
    /**
     * @private
     * @param {?} specialCharactersForRemove
     * @return {?}
     */
    _regExpForRemove(specialCharactersForRemove) {
        return new RegExp(specialCharactersForRemove.map((item) => `\\${item}`).join('|'), 'gi');
    }
}
MaskService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
MaskService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [config,] }] },
    { type: ElementRef },
    { type: Renderer2 }
];
if (false) {
    /** @type {?} */
    MaskService.prototype.maskExpression;
    /** @type {?} */
    MaskService.prototype.isNumberValue;
    /** @type {?} */
    MaskService.prototype.showMaskTyped;
    /** @type {?} */
    MaskService.prototype.maskIsShown;
    /**
     * @type {?}
     * @private
     */
    MaskService.prototype._formElement;
    /** @type {?} */
    MaskService.prototype.onChange;
    /** @type {?} */
    MaskService.prototype.onTouch;
    /**
     * @type {?}
     * @private
     */
    MaskService.prototype.document;
    /**
     * @type {?}
     * @protected
     */
    MaskService.prototype._config;
    /**
     * @type {?}
     * @private
     */
    MaskService.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    MaskService.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hc2svIiwic291cmNlcyI6WyJhcHAvbmd4LW1hc2svbWFzay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxNQUFNLEVBQVcsTUFBTSxVQUFVLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRzVELE1BQU0sT0FBTyxXQUFZLFNBQVEsa0JBQWtCOzs7Ozs7O0lBU2pELFlBRTRCLFFBQWEsRUFDYixPQUFnQixFQUNsQyxXQUF1QixFQUN2QixTQUFvQjtRQUU1QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFMVyxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQ2IsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBYnZCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLGdCQUFXLEdBQVcsRUFBRSxDQUFDOztRQUd6QixhQUFRLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUMxQixZQUFPLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBU3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7SUFDckQsQ0FBQzs7Ozs7Ozs7SUFFTSxTQUFTLENBQ2QsVUFBa0IsRUFDbEIsY0FBc0IsRUFDdEIsV0FBbUIsQ0FBQyxFQUNwQixLQUFlLEdB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QyxLQUFLLENBQUM7SUFDWixDQUFDOzs7Ozs7SUFFTyxnQkFBZ0IsQ0FBQywwQkFBb0M7UUFDM0QsT0FBTyxJQUFJLE1BQU0sQ0FDZiwwQkFBMEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQ3ZFLElBQUksQ0FDTCxDQUFDO0lBQ0osQ0FBQzs7O1lBaElGLFVBQVU7Ozs7NENBWU4sTUFBTSxTQUFDLFFBQVE7NENBQ2YsTUFBTSxTQUFDLE1BQU07WUFsQlQsVUFBVTtZQUFzQixTQUFTOzs7O0lBT2hELHFDQUFtQzs7SUFDbkMsb0NBQXNDOztJQUN0QyxvQ0FBc0M7O0lBQ3RDLGtDQUFnQzs7Ozs7SUFDaEMsbUNBQXVDOztJQUV2QywrQkFBaUM7O0lBQ2pDLDhCQUEwQjs7Ozs7SUFHeEIsK0JBQXVDOzs7OztJQUN2Qyw4QkFBMEM7Ozs7O0lBQzFDLGtDQUErQjs7Ozs7SUFDL0IsZ0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0LCBJbmplY3RhYmxlLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbmZpZywgSUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hc2tBcHBsaWVyU2VydmljZSB9IGZyb20gJy4vbWFzay1hcHBsaWVyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWFza1NlcnZpY2UgZXh0ZW5kcyBNYXNrQXBwbGllclNlcnZpY2Uge1xuICBwdWJsaWMgbWFza0V4cHJlc3Npb246IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgaXNOdW1iZXJWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgc2hvd01hc2tUeXBlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgbWFza0lzU2hvd246IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9mb3JtRWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIHB1YmxpYyBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICBwdWJsaWMgb25Ub3VjaCA9ICgpID0+IHt9O1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIEBJbmplY3QoY29uZmlnKSBwcm90ZWN0ZWQgX2NvbmZpZzogSUNvbmZpZyxcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgc3VwZXIoX2NvbmZpZyk7XG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlNYXNrKFxuICAgIGlucHV0VmFsdWU6IHN0cmluZyxcbiAgICBtYXNrRXhwcmVzc2lvbjogc3RyaW5nLFxuICAgIHBvc2l0aW9uOiBudW1iZXIgPSAwLFxuICAgIGNiOiBGdW5jdGlvbiA9ICgpID0+IHt9XG4gICk6IHN0cmluZyAge1xuXG4gICAgdGhpcy5tYXNrSXNTaG93biA9IHRoaXMuc2hvd01hc2tUeXBlZFxuICAgICAgICA/IHRoaXMubWFza0V4cHJlc3Npb24ucmVwbGFjZSgvXFx3L2csICdfJylcbiAgICAgICAgOiAnJztcbiAgICBpZiAoIWlucHV0VmFsdWUgJiYgdGhpcy5zaG93TWFza1R5cGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcmVmaXggKyB0aGlzLm1hc2tJc1Nob3duO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQ6IHN0cmluZyAgPSBzdXBlci5hcHBseU1hc2soXG4gICAgICBpbnB1dFZhbHVlLFxuICAgICAgbWFza0V4cHJlc3Npb24sXG4gICAgICBwb3NpdGlvbixcbiAgICAgIGNiXG4gICAgKTtcbiAgICBBcnJheS5pc0FycmF5KHRoaXMuZHJvcFNwZWNpYWxDaGFyYWN0ZXJzKVxuICAgICAgICA/IHRoaXMub25DaGFuZ2UodGhpcy5fcmVtb3ZlTWFzayh0aGlzLl9yZW1vdmVTdWZpeCh0aGlzLl9yZW1vdmVQcmVmaXgocmVzdWx0KSksIHRoaXMuZHJvcFNwZWNpYWxDaGFyYWN0ZXJzKSlcbiAgICAgICAgOiB0aGlzLmRyb3BTcGVjaWFsQ2hhcmFjdGVycyA9PT0gdHJ1ZVxuICAgICAgICAgPyB0aGlzLm9uQ2hhbmdlKFxuICAgICAgICAgIHRoaXMuaXNOdW1iZXJWYWx1ZVxuICAgICAgICAgICAgID8gTnVtYmVyKHRoaXMuX3JlbW92ZU1hc2sodGhpcy5fcmVtb3ZlU3VmaXgodGhpcy5fcmVtb3ZlUHJlZml4KHJlc3VsdCkpLCB0aGlzLm1hc2tTcGVjaWFsQ2hhcmFjdGVycykpXG4gICAgICAgICAgICAgOiB0aGlzLl9yZW1vdmVNYXNrKHRoaXMuX3JlbW92ZVN1Zml4KHRoaXMuX3JlbW92ZVByZWZpeChyZXN1bHQpKSwgdGhpcy5tYXNrU3BlY2lhbENoYXJhY3RlcnMpXG4gICAgICAgICAgICApXG4gICAgICAgICA6IHRoaXMub25DaGFuZ2UodGhpcy5fcmVtb3ZlU3VmaXgodGhpcy5fcmVtb3ZlUHJlZml4KHJlc3VsdCkpKTtcbiAgICAgICAgICBsZXQgaWZNYXNrSXNTaG93bjogc3RyaW5nID0gJyc7XG4gICAgICAgICAgaWYgKCF0aGlzLnNob3dNYXNrVHlwZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHJlc0xlbjogbnVtYmVyID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgICBjb25zdCBwcmVmTm1hc2s6IHN0cmluZyA9IHRoaXMucHJlZml4ICsgdGhpcy5tYXNrSXNTaG93bjtcbiAgICAgICAgICBpZk1hc2tJc1Nob3duID0gcHJlZk5tYXNrLnNsaWNlKHJlc0xlbik7XG4gICAgcmV0dXJuIHJlc3VsdCArIGlmTWFza0lzU2hvd247XG4gIH1cblxuICBwdWJsaWMgYXBwbHlWYWx1ZUNoYW5nZXMoXG4gICAgcG9zaXRpb246IG51bWJlciA9IDAsXG4gICAgY2I6IEZ1bmN0aW9uID0gKCkgPT4ge31cbiAgKTogdm9pZCB7XG4gICAgY29uc3QgbWFza2VkSW5wdXQ6IHN0cmluZyB8IG51bWJlciA9IHRoaXMuYXBwbHlNYXNrKFxuICAgICAgdGhpcy5fZm9ybUVsZW1lbnQudmFsdWUsXG4gICAgICB0aGlzLm1hc2tFeHByZXNzaW9uLFxuICAgICAgcG9zaXRpb24sXG4gICAgICBjYlxuICAgICk7XG4gICAgdGhpcy5fZm9ybUVsZW1lbnQudmFsdWUgPSBtYXNrZWRJbnB1dDtcbiAgICBpZiAodGhpcy5fZm9ybUVsZW1lbnQgPT09IHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNsZWFySWZOb3RNYXRjaEZuKCk7XG4gIH1cblxuICBwdWJsaWMgc2hvd01hc2tJbklucHV0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3dNYXNrVHlwZWQpIHtcbiAgICAgIHRoaXMubWFza0lzU2hvd24gPSB0aGlzLm1hc2tFeHByZXNzaW9uLnJlcGxhY2UoL1xcdy9nLCAnXycpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbGVhcklmTm90TWF0Y2hGbigpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNsZWFySWZOb3RNYXRjaCA9PT0gdHJ1ZSAmJlxuICAgICAgdGhpcy5tYXNrRXhwcmVzc2lvbi5sZW5ndGggIT09IHRoaXMuX2Zvcm1FbGVtZW50LnZhbHVlLmxlbmd0aFxuICAgICkge1xuICAgICAgdGhpcy5mb3JtRWxlbWVudFByb3BlcnR5ID0gWyd2YWx1ZScsICcnXTtcbiAgICAgIHRoaXMuYXBwbHlNYXNrKHRoaXMuX2Zvcm1FbGVtZW50LnZhbHVlLCB0aGlzLm1hc2tFeHByZXNzaW9uKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0IGZvcm1FbGVtZW50UHJvcGVydHkoW25hbWUsIHZhbHVlXTogW3N0cmluZywgc3RyaW5nIHwgYm9vbGVhbl0pIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9mb3JtRWxlbWVudCwgbmFtZSwgdmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlTWFzayhcbiAgICB2YWx1ZTogc3RyaW5nLFxuICAgIHNwZWNpYWxDaGFyYWN0ZXJzRm9yUmVtb3ZlOiBzdHJpbmdbXVxuICApOiBzdHJpbmcge1xuICAgIHJldHVybiB2YWx1ZVxuICAgICAgPyB2YWx1ZS5yZXBsYWNlKHRoaXMuX3JlZ0V4cEZvclJlbW92ZShzcGVjaWFsQ2hhcmFjdGVyc0ZvclJlbW92ZSksICcnKVxuICAgICAgOiB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZVByZWZpeCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMucHJlZml4KSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICAgICAgPyB2YWx1ZS5yZXBsYWNlKHRoaXMucHJlZml4LCAnJylcbiAgICAgIDogdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVTdWZpeCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMuc3VmaXgpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gICAgICA/IHZhbHVlLnJlcGxhY2UodGhpcy5zdWZpeCwgJycpXG4gICAgICA6IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVnRXhwRm9yUmVtb3ZlKHNwZWNpYWxDaGFyYWN0ZXJzRm9yUmVtb3ZlOiBzdHJpbmdbXSk6IFJlZ0V4cCB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXG4gICAgICBzcGVjaWFsQ2hhcmFjdGVyc0ZvclJlbW92ZS5tYXAoKGl0ZW06IHN0cmluZykgPT4gYFxcXFwke2l0ZW19YCkuam9pbignfCcpLFxuICAgICAgJ2dpJ1xuICAgICk7XG4gIH1cbn0iXX0=