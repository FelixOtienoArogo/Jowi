class AppController{
    static getStatus(req, res){
        const status = {
            redis: "Active",
            db: "Inactive",
        };
        res.status(200).send(status);
    }
    
    static async getStats(req, res) {
        const stats = {
          users: await dbClient.nbUsers(),
          files: await dbClient.nbFiles(),
        };
        res.status(200).send(stats);
      }    
}

export default AppController;
