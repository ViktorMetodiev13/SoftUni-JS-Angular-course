class Tickets<T> {
    public data: Array<T>;
    public sortCriteria: string;

    constructor (data: Array<T>, sortCriteria: string) {
        this.data = data;
        this.sortCriteria = sortCriteria;
    }
    
    divideData(): string {
        for (const line of this.data) {
            const [destination, price, status] = line.split('|');
        }
        return
    }

    printResult() {
        console.log(`[ Ticket { destination: '${this.destination}',
            
    }
        
        ]`);
    }
}