package com.moonground.domain.airpusan;

import java.util.List;
import lombok.Data;

@Data
public class PubTaxFuel {

  private String currency;
  private double fuelAd;
  private double fuelCh;
  private double fuelIn;
  private double pubAd;
  private double pubCh;
  private double pubIn;
  private double taxAd;
  private double taxCh;
  private double taxIn;
  private List<TaxMap> taxMapAd;
  private List<TaxMap> taxMapCh;
  private List<TaxMap> taxMapIn;
  private String viewCurrency;
  private double viewFuelAd;
  private double viewFuelCh;
  private double viewFuelIn;
  private double viewTaxAd;
  private double viewTaxCh;
  private double viewTaxIn;
}
