﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Avtomatizaciya_zakupki2
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Сост поставок.
    /// </summary>
    // *** Start programmer edit section *** (СостПоставок CustomAttributes)

    // *** End programmer edit section *** (СостПоставок CustomAttributes)
    public enum СостПоставок
    {
        
        // *** Start programmer edit section *** (СостПоставок.НеОтгружен CustomAttributes)

        // *** End programmer edit section *** (СостПоставок.НеОтгружен CustomAttributes)
        [Caption("Не отгружен")]
        НеОтгружен,
        
        // *** Start programmer edit section *** (СостПоставок.ПолностьюОтгружен CustomAttributes)

        // *** End programmer edit section *** (СостПоставок.ПолностьюОтгружен CustomAttributes)
        [Caption("Частично отгружен")]
        ПолностьюОтгружен,
        
        // *** Start programmer edit section *** (СостПоставок.ЧастичноОтгружен CustomAttributes)

        // *** End programmer edit section *** (СостПоставок.ЧастичноОтгружен CustomAttributes)
        [Caption("Полностью отгружен")]
        ЧастичноОтгружен,
    }
}
