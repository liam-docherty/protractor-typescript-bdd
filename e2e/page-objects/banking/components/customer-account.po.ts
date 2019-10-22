import {
  by,
  ElementArrayFinder,
  ElementFinder,
} from 'protractor';
import { ButtonAtom } from '../../atoms/button-atom.po';
import { InputFormGroupAtom } from '../../atoms/input-form-group-atom.po';
import { SelectAtom } from '../../atoms/select-atom.po';
import { ContentPanel } from './content-panel.po';

export class CustomerAccount extends ContentPanel {

  public readonly accountSelect: SelectAtom;
  public readonly transactionsTabButton: ButtonAtom;
  public readonly depositTabButton: ButtonAtom;
  public readonly withdrawalTabButton: ButtonAtom;
  public readonly depositFormInput: InputFormGroupAtom;
  public readonly depositFormButton: ButtonAtom;
  public readonly withdrawalFormInput: InputFormGroupAtom;
  public readonly withdrawalFormButton: ButtonAtom;

  private readonly customerDetails: ElementFinder = this.box.all(by.tagName('div')).get(0);
  private readonly welcome: ElementFinder = this.customerDetails.element(by.tagName('strong'));
  private readonly customerName: ElementFinder = this.welcome.element(by.tagName('span'));
  private readonly centers: ElementArrayFinder = this.box.all(by.className('center'));
  private readonly accountDetails: ElementFinder = this.centers.get(0);
  private readonly accountDetailsElements: ElementArrayFinder = this.accountDetails.all(by.tagName('strong'));
  private readonly accountNumber: ElementFinder = this.accountDetailsElements.get(0);
  private readonly accountBalance: ElementFinder = this.accountDetailsElements.get(1);
  private readonly accountCurrency: ElementFinder = this.accountDetailsElements.get(2);
  private readonly options: ElementArrayFinder = this.centers.get(1).all(by.className('btn-lg'));
  private readonly formBox: ElementFinder = this.box.element(by.className('mainBox'));
  private readonly transactionMessage: ElementFinder = this.formBox.element(by.className('error ng-binding'));
  private readonly depositForm: ElementFinder = this.formBox.element(by.css('form[ng-submit="deposit()"]'));
  private readonly withdrawalForm: ElementFinder = this.formBox.element(by.css('form[ng-submit="withdrawl()"]'));

  constructor() {
    super();
    this.accountSelect = new SelectAtom(this.customerDetails.element(by.model('accountNo')));
    this.transactionsTabButton = new ButtonAtom(this.options.get(0));
    this.depositTabButton = new ButtonAtom(this.options.get(1));
    this.depositFormInput = new InputFormGroupAtom(this.depositForm.element(by.className('form-group')));
    this.depositFormButton = new ButtonAtom(this.depositForm.element(by.className('btn-default')));
    this.withdrawalTabButton = new ButtonAtom(this.options.get(2));
    this.withdrawalFormInput = new InputFormGroupAtom(this.withdrawalForm.element(by.className('form-group')));
    this.withdrawalFormButton = new ButtonAtom(this.withdrawalForm.element(by.className('btn-default')));
  }

  public async getWelcomeMessageText(): Promise<string> {
    return await this.welcome.getText();
  }

  public async getWelcomeMessageFontSize(): Promise<string> {
    return await this.welcome.getCssValue('font-size');
  }

  public async getCustomerNameFontSize(): Promise<string> {
    return await this.customerName.getCssValue('font-size');
  }

  public async getAccountDetailsText(): Promise<string> {
    return await this.accountDetails.getText();
  }

  public async getAccountBalanceText(): Promise<string> {
    return await this.accountBalance.getText();
  }

  public async getActionsCount(): Promise<number> {
    return await this.options.count();
  }

  public async isTransactionMessageVisible(): Promise<boolean> {
    return await this.transactionMessage.isDisplayed();
  }

  public async getTransactionMessageText(): Promise<string> {
    return await this.transactionMessage.getText();
  }

}
