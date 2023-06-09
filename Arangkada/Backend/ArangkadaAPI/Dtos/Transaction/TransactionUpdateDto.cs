﻿using System.ComponentModel.DataAnnotations;

namespace ArangkadaAPI.Dtos.Transaction
{
    public class TransactionUpdateDto
    {
        [Required(ErrorMessage = "Amount is required.")]
        [RegularExpression(@"^\d+(\.\d{1,2})?$", ErrorMessage = "Amount must be a positive number with up to 2 decimal places.")]
        [Range(0.00, float.MaxValue, ErrorMessage = "Amount must be a positive number.")]
        public float Amount { get; set; }

        [Required(ErrorMessage = "The Date is required.")]
        [MaxLength(20, ErrorMessage = "Maximum length for the Date is 20 characters.")]
        public string? Date { get; set; }
    }
}
