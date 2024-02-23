import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AllTabContent from "./AllTabContent";

const DashboardTab = () => {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList>
        <TabsTrigger value="all">Все</TabsTrigger>
        <TabsTrigger value="users">Пользователи</TabsTrigger>
        <TabsTrigger value="organizations">Организации</TabsTrigger>
      </TabsList>
      <TabsContent value="all" className="">
        <AllTabContent />
      </TabsContent>
      <TabsContent value="users">Пользователи</TabsContent>
      <TabsContent value="organizations">Организации</TabsContent>
    </Tabs>
  );
};

export default DashboardTab;
