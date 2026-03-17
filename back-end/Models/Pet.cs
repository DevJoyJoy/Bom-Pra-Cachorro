namespace BomPraCachorro.Models;

public class Pet
{
    public int Id { get; set; }
    public string? Nome { get; set; }
    public string? ImagemUrl { get; set; }
    public int? Idade { get; set; }
    public string? Descricao { get; set; }
    public string? Sexo { get; set; }
    public bool? Castrado { get; set; }
    public string? Porte { get; set; }
    public string? Raca { get; set; }
}

// Id, Nome, ImagemUrl, Idade, Descricao, Sexo, Porte, Raca