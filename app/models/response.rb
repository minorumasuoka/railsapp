class Response    
    def initialize(message, status)
        @message = message
        @status = status
    end

    @@types = [
        Response.new('Se completó la renta.', :ok),
        Response.new('No se le puede rentar porque tiene deudas.', :bad_request)        
    ]

    def message
        return @message
    end

    def status
        return @status
    end

    def self.randomize
        number = rand(0..(@@types.length-1))
        return @@types[number]
    end
end